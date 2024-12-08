import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase
  // strapi.customFields.register({
  //   name: 'section-type', // Nazwa pola
  //   plugin: 'section-type-plugin', // Identyfikator pluginu
  //   type: 'string', // Typ pola
  //   components: {
  //     Input: async () => import('../admin/src/components/Input'),
  //   },
  // });
  strapi.customFields.register({
    name: "color",
    plugin: "section-type-plugin",
    type: "json",
    // inputSize: {
    //   // optional
    //   default: 4,
    //   isResizable: true,
    // },
    // components: {
    //   Input: async () => import('../../admin/src/components/Input')
    // }
  });
};

export default register;
