module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/electron",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  rules: {
    // Indent with 4 spaces
    "indent": ["error", 4],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "@typescript-eslint/indent": ["error", 4],
    // Allow only arrow notation for component definition
    "react/function-component-definition": [
      "error", {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    // Never enforce no braces for an arrow function
    "arrow-body-style": ["off", "as-needed"],
    // Enforce double quotes for strings
    "quotes": ["off"],
    "@typescript-eslint/quotes": ["error", "double"],
    // Allow functions, classes/components, constants (eg style) to be used before they are defined in the file
    "no-use-before-define": ["off"],
    "@typescript-eslint/no-use-before-define": ["error", {
      "functions": false,
      "classes": false,
      "variables": false,
      "allowNamedExports": false
    }],
    // Allow fragment with single child element to allow ternary expressions
    "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
    // Force longhand version of React.Fragment
    "react/jsx-fragments": ["error", "element"],
    // Indent switch case statements
    "indent": ["error", 4, { "SwitchCase": 1 }],
    // Allow calling of a async function without waiting but require to void the return
    "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: true }],
    // Allow using void (required for ignoring async return)
    "no-void": ["error", { allowAsStatement: true }],
    // Changed await in loop form error to warning as is allowed for tasks that should be executed sequentially. User must comment to ignore warning
    "no-await-in-loop": "warn",
    // Changed bitwise operations from error to warning as will need to use occasionally for embedded. User must comment to ignore warning
    "no-bitwise": "warn",
    // Only warn about un-included hook dependencies as some situations do not require them. User must comment to ignore warning
    "react-hooks/exhaustive-deps": ["warn", {
      "additionalHooks": "useThrottledCallback"
    }],
    // Allow forIn() and forEach(). Improves code readability, and from online research, it is common to enable these
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    // Allow fragments for default children props and for assigning to initial empty JSX variables
    "react/jsx-no-useless-fragment": "off",
    // Turn off dangling comma on generics as required in jsx files to prevent generics being detected as jsx code
    "@typescript-eslint/comma-dangle": ["warn", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline",
      "enums": "always-multiline",
      "generics": "ignore",
      "tuples": "always-multiline"
    }],
    // Allow creation of components as props as required for navigation package.
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    // Override default to allow destructured imports to be on single line upto 5 imports
    "object-curly-newline": ["error", { ImportDeclaration: { consistent: true, minProperties: 6 } }],
    // Allow ++ and --
    "no-plusplus": "off",
    // Allow async function where expecting void return to allow async function on onPress callbacks
    "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
    // Allow awaits in loops
    "no-await-in-loop": "off",
    // Allow exporting default
    "no-restricted-exports": "off",
    // Allow dangling underscores for Realm ImportDeclaration
    "no-underscore-dangle": "off",
    // Allow spaced comments for index files
    "spaced-comment": "off",
    // Use default parameter values for functional components instead of deprecated default props
    "react/require-default-props": "off",
    // Allow files with single export for consistent file/folder structure purposes
    "import/prefer-default-export": "off",
    // Sometimes using index is only option. Warn only
    "react/no-array-index-key": "warn",
    // PropTypes is deprecated and not required
    "react/prop-types": "off",
  },
}
