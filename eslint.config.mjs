import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default [...tseslint.configs.recommended, eslintPluginPrettier];
