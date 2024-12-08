import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  // register(/* { strapi }: { strapi: Core.Strapi } */) {},
  // // register({ customFields }) {
  // //   customFields.register({
  // //     name: 'dynamic-fields',
  // //     plugin: 'content-type-builder',
  // //     type: 'string',
      
  // //   });
  // // },
  register({ strapi }: { strapi: Core.Strapi }) {
    // register phase
    // strapi.customFields.register({
    //   name: 'section-type', // Nazwa pola
    //   plugin: 'section-type-plugin', // Identyfikator pluginu
    //   type: 'string', // Typ pola
    //   components: {
    //     Input: async () => import('../admin/src/components/Input'),
    //   },
    // });
    // strapi.customFields.register({
    //   name: "color",
    //   plugin: "color-picker",
    //   type: "string",
    //   // inputSize: {
    //   //   // optional
    //   //   default: 4,
    //   //   isResizable: true,
    //   // },
    //   // components: {
    //   //   Input: async () => import('../../admin/src/components/Input')
    //   // }
    // });
  },
  


  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};

