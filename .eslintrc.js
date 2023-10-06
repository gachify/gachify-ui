module.exports = {
  "root": true,
  "ignorePatterns": [
    "projects/**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "settings": {
        "import/resolver": {
          "typescript": {
            "project": __dirname,
          },
          "node": true
        }
      },
      "parserOptions": {
        "project": ["tsconfig.json"],
      },
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:prettier/recommended"
      ],
      "rules": {
        "semi": ["error", "never"],
        // Enforce a convention in the order of import statements
        "import/order": [
          "error",
          {
            "newlines-between": "always",
            "groups": [
              [
                "builtin",
                "external"
              ],
              [
                "parent",
                "sibling",
                "index"
              ]
            ]
          }
        ],
        // Require explicit accessibility modifiers on class properties and methods
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            "accessibility": "no-public"
          }
        ],
        // Disallow variable declarations from shadowing variables declared in the outer scope.
        "@typescript-eslint/no-shadow": [
          "error"
        ],
        // Remove a specific member delimiter style for interfaces and type literals.
        "@typescript-eslint/member-delimiter-style": "off",
        // Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring
        "@typescript-eslint/no-unused-vars": ["warn", {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }],
        // Disallow conditionals where the type is always truthy or always falsy
        "@typescript-eslint/no-unnecessary-condition": "warn",
        // Require private members to be marked as readonly if they're never modified outside of the constructor
        "@typescript-eslint/prefer-readonly": "warn",
        // Enforce consistent line breaks after opening and before closing braces
        "object-curly-newline": [
          "error",
          {
            "consistent": true
          }
        ],
        // Enforce camelcase naming convention
        "camelcase": [
          "error",
          {
            "properties": "never"
          }
        ],
        // Enforce consistent brace style for all control statements
        "curly": "error",
        // Require default cases in switch statements
        "default-case": "error",
        // Enforce default clauses in switch statements to be last
        "default-case-last": "error",
        // Disallow else blocks after return statements in if statements
        "no-else-return": "error",
        // Disallow unnecessary return await
        "no-return-await": "error",
        // Disallow shorthand type conversion
        "no-implicit-coercion": "error",

        "@typescript-eslint/no-namespace": "off",

        // Angular Rules

        // Ensures component's changeDetection is set to ChangeDetectionStrategy.OnPush
        "@angular-eslint/prefer-on-push-component-change-detection": [
          "error"
        ],
        // Disallows using ViewEncapsulation.None
        "@angular-eslint/use-component-view-encapsulation": [
          "error"
        ],
        // Ensures ASC alphabetical order for NgModule metadata arrays for easy visual scanning
        "@angular-eslint/sort-ngmodule-metadata-arrays": [
          "error"
        ],
        // Ensures that classes implement lifecycle interfaces corresponding to the declared lifecycle methods
        // https://angular.io/guide/styleguide#style-09-01
        "@angular-eslint/use-lifecycle-interface": [
          "error"
        ],
        // Ensures that input bindings, including aliases, are not named or prefixed by the configured disallowed prefixes
        "@angular-eslint/no-input-prefix": [
          "error",
          {
            "prefixes": [
              "on"
            ]
          }
        ],
        // Classes decorated with @Component must have defined suffix in their name
        "@angular-eslint/component-class-suffix": [
          "error",
          {
            "suffixes": [
              "Component",
              "View",
              "Controller"
            ]
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "gachi",
            "style": "kebab-case"
          }
        ],
        "@angular-eslint/no-host-metadata-property": [
          "error",
          {
            "allowStatic": true
          }
        ]
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility",
        "plugin:prettier/recommended"
      ],
      "rules": {
        // Disallows the use of inline styles in HTML templates
        "@angular-eslint/template/no-inline-styles": "error",
        // Ensures that HTML attributes and Angular bindings are sorted based on an expected order
        "@angular-eslint/template/attributes-order": [
          "error",
          {
            "alphabetical": true,
            "order": [
              "STRUCTURAL_DIRECTIVE",
              "TEMPLATE_REFERENCE",
              "INPUT_BINDING",
              "TWO_WAY_BINDING",
              "ATTRIBUTE_BINDING",
              "OUTPUT_BINDING"
            ]
          }
        ]
      }
    }
  ]
}
