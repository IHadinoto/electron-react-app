import path from "path";

export const alias = {
  // Default Paths
  assets: path.resolve(__dirname, 'src/app/assets/'),
  components: path.resolve(__dirname, 'src/app/components/'),
  constants: path.resolve(__dirname, 'src/app/constants/'),
  contexts: path.resolve(__dirname, 'src/app/contexts/'),
  layouts: path.resolve(__dirname, 'src/app/layouts/'),
  theme: path.resolve(__dirname, 'src/app/theme/'),
  types: path.resolve(__dirname, 'src/app/types/'),
  variables: path.resolve(__dirname, 'src/app/variables/'),
  views: path.resolve(__dirname, 'src/app/views/'),
  routes: path.resolve(__dirname, 'src/app/routes/')
}
