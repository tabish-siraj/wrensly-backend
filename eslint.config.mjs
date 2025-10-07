import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
    ...tseslint.configs.recommended,
    eslintPluginPrettierRecommended
);
