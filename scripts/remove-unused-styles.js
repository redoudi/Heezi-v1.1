#!/usr/bin/env node

/**
 * Script to remove unused styles from React Native StyleSheet definitions
 *
 * Usage:
 *   node scripts/remove-unused-styles.js [file-path]
 *   node scripts/remove-unused-styles.js --all
 *   node scripts/remove-unused-styles.js --dry-run
 *
 * Options:
 *   --all      Process all TypeScript/JavaScript files in the project
 *   --dry-run  Show what would be removed without making changes
 *   --help     Show this help message
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

class UnusedStylesRemover {
  constructor(options = {}) {
    this.dryRun = options.dryRun || false;
    this.verbose = options.verbose || false;
    this.backup = options.backup || false;
  }

  /**
   * Find all TypeScript and JavaScript files with StyleSheet definitions
   */
  findStyleSheetFiles(directory = ".") {
    const patterns = ["**/*.tsx", "**/*.ts", "**/*.jsx", "**/*.js"].filter(
      (pattern) => {
        // Exclude node_modules and build directories
        return !pattern.includes("node_modules") && !pattern.includes("build");
      }
    );

    const files = [];
    patterns.forEach((pattern) => {
      files.push(
        ...glob.sync(pattern, {
          cwd: directory,
          ignore: ["node_modules/**", "build/**", "dist/**", ".git/**"],
        })
      );
    });

    return files;
  }

  /**
   * Parse a file and extract StyleSheet usage information
   */
  parseFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8");

      // Find StyleSheet.create calls
      const styleSheetRegex =
        /const\s+(\w+)\s*=\s*StyleSheet\.create\s*\(\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}\s*\);/gs;
      const matches = [...content.matchAll(styleSheetRegex)];

      if (matches.length === 0) {
        return null;
      }

      const result = {
        filePath,
        content,
        styleSheets: [],
      };

      matches.forEach((match) => {
        const stylesVarName = match[1];
        const stylesContent = match[2];

        // Extract style definitions
        const styleDefinitions = this.extractStyleDefinitions(stylesContent);

        // Find all usages of this styles object
        const usages = this.findStyleUsages(content, stylesVarName);

        result.styleSheets.push({
          varName: stylesVarName,
          definitions: styleDefinitions,
          usages: usages,
          fullMatch: match[0],
          startIndex: match.index,
          endIndex: match.index + match[0].length,
        });
      });

      return result;
    } catch (error) {
      console.error(`Error parsing file ${filePath}:`, error.message);
      return null;
    }
  }

  /**
   * Extract style definitions from StyleSheet content
   */
  extractStyleDefinitions(content) {
    const definitions = {};

    // Match style definitions like "styleName: { ... }"
    const styleRegex = /(\w+)\s*:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
    let match;

    while ((match = styleRegex.exec(content)) !== null) {
      const styleName = match[1];
      const styleContent = match[2];
      definitions[styleName] = {
        fullDefinition: match[0],
        content: styleContent.trim(),
        startIndex: match.index,
        endIndex: match.index + match[0].length,
      };
    }

    return definitions;
  }

  /**
   * Find all usages of a styles object in the content
   */
  findStyleUsages(content, stylesVarName) {
    const usages = new Set();

    // Find patterns like styles.styleName
    const usageRegex = new RegExp(`${stylesVarName}\\.(\\w+)`, "g");
    let match;

    while ((match = usageRegex.exec(content)) !== null) {
      usages.add(match[1]);
    }

    return Array.from(usages);
  }

  /**
   * Remove unused styles from a file
   */
  removeUnusedStyles(fileInfo) {
    const changes = [];

    fileInfo.styleSheets.forEach((styleSheet) => {
      const { definitions, usages, varName } = styleSheet;
      const usedStyles = new Set(usages);

      // Find unused styles
      const unusedStyles = Object.keys(definitions).filter(
        (styleName) => !usedStyles.has(styleName)
      );

      if (unusedStyles.length > 0) {
        changes.push({
          varName,
          unusedStyles,
          usedStyles: Array.from(usedStyles),
        });
      }
    });

    return changes;
  }

  /**
   * Generate cleaned content by removing unused styles
   */
  generateCleanedContent(fileInfo, changes) {
    let content = fileInfo.content;
    let offset = 0;

    // Sort changes by position (reverse order to maintain indices)
    const allChanges = [];
    fileInfo.styleSheets.forEach((styleSheet, sheetIndex) => {
      const change = changes.find((c) => c.varName === styleSheet.varName);
      if (change) {
        allChanges.push({
          ...change,
          styleSheet,
          sheetIndex,
        });
      }
    });

    allChanges.forEach((change) => {
      const { styleSheet } = change;
      const { definitions } = styleSheet;

      // Remove unused style definitions
      change.unusedStyles.forEach((styleName) => {
        const definition = definitions[styleName];
        if (definition) {
          // Find the exact position in the original content
          const startPos = styleSheet.startIndex + definition.startIndex;
          const endPos = styleSheet.startIndex + definition.endIndex;

          // Remove the definition (including trailing comma)
          const beforeDefinition = content.substring(0, startPos);
          const afterDefinition = content.substring(endPos);

          // Remove trailing comma if it exists
          const cleanAfter = afterDefinition.replace(/^\s*,?\s*/, "");

          content = beforeDefinition + cleanAfter;

          if (this.verbose) {
            console.log(
              `  Removed unused style: ${change.varName}.${styleName}`
            );
          }
        }
      });
    });

    return content;
  }

  /**
   * Process a single file
   */
  processFile(filePath) {
    console.log(`Processing: ${filePath}`);

    const fileInfo = this.parseFile(filePath);
    if (!fileInfo) {
      console.log(`  No StyleSheet definitions found`);
      return;
    }

    const changes = this.removeUnusedStyles(fileInfo);
    if (changes.length === 0) {
      console.log(`  No unused styles found`);
      return;
    }

    // Show what would be removed
    changes.forEach((change) => {
      console.log(
        `  Found ${change.unusedStyles.length} unused styles in ${change.varName}:`
      );
      change.unusedStyles.forEach((styleName) => {
        console.log(`    - ${change.varName}.${styleName}`);
      });
    });

    if (this.dryRun) {
      console.log(
        `  [DRY RUN] Would remove ${changes.reduce(
          (sum, c) => sum + c.unusedStyles.length,
          0
        )} unused styles`
      );
      return;
    }

    // Create backup if requested
    if (this.backup) {
      const backupPath = filePath + ".backup";
      fs.copyFileSync(filePath, backupPath);
      console.log(`  Created backup: ${backupPath}`);
    }

    // Generate and write cleaned content
    const cleanedContent = this.generateCleanedContent(fileInfo, changes);
    fs.writeFileSync(filePath, cleanedContent, "utf8");

    console.log(
      `  Removed ${changes.reduce(
        (sum, c) => sum + c.unusedStyles.length,
        0
      )} unused styles`
    );
  }

  /**
   * Process all files in the project
   */
  processAll() {
    const files = this.findStyleSheetFiles();
    console.log(`Found ${files.length} files to process`);

    let totalRemoved = 0;

    files.forEach((filePath) => {
      try {
        this.processFile(filePath);
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    });

    console.log(`\nProcessing complete!`);
  }

  /**
   * Process a specific file
   */
  processSpecific(filePath) {
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return;
    }

    this.processFile(filePath);
  }
}

// CLI interface
function main() {
  const args = process.argv.slice(2);

  if (args.includes("--help")) {
    console.log(`
Usage: node scripts/remove-unused-styles.js [options] [file-path]

Options:
  --all       Process all TypeScript/JavaScript files in the project
  --dry-run   Show what would be removed without making changes
  --backup    Create backup files before making changes
  --verbose   Show detailed output
  --help      Show this help message

Examples:
  node scripts/remove-unused-styles.js app/sandbox.tsx
  node scripts/remove-unused-styles.js --all --dry-run
  node scripts/remove-unused-styles.js --all --backup --verbose
    `);
    return;
  }

  const options = {
    dryRun: args.includes("--dry-run"),
    backup: args.includes("--backup"),
    verbose: args.includes("--verbose"),
  };

  const remover = new UnusedStylesRemover(options);

  if (options.dryRun) {
    console.log("🔍 DRY RUN MODE - No files will be modified");
  }

  if (args.includes("--all")) {
    remover.processAll();
  } else if (args.length > 0 && !args[0].startsWith("--")) {
    const filePath = args[0];
    remover.processSpecific(filePath);
  } else {
    console.log("Please specify a file path or use --all to process all files");
    console.log("Use --help for more information");
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = UnusedStylesRemover;
