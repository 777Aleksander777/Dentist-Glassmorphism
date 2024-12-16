import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    nazwa: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'link'>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface ElementsList extends Struct.ComponentSchema {
  collectionName: 'components_elements_lists';
  info: {
    description: '';
    displayName: 'list';
  };
  attributes: {
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsListTwo extends Struct.ComponentSchema {
  collectionName: 'components_elements_list_twos';
  info: {
    displayName: 'listTwo';
  };
  attributes: {
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    description: '';
    displayName: 'logo';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'logo'>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface LayoutAbout extends Struct.ComponentSchema {
  collectionName: 'components_layout_abouts';
  info: {
    description: '';
    displayName: 'sekcja informacyjna';
  };
  attributes: {
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    opis: Schema.Attribute.Text & Schema.Attribute.Required;
    przycisk: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    tytul: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutBenefits extends Struct.ComponentSchema {
  collectionName: 'components_layout_benefits';
  info: {
    description: '';
    displayName: 'sekcja galeria';
  };
  attributes: {
    imgs: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    opis: Schema.Attribute.Text & Schema.Attribute.Required;
    przycisk: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    tytul: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    address: Schema.Attribute.RichText & Schema.Attribute.Required;
    contact: Schema.Attribute.RichText & Schema.Attribute.Required;
    footerLinks: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    logo: Schema.Attribute.Component<'elements.logo', false> &
      Schema.Attribute.Required;
    workingHours: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Component<'elements.logo', false> &
      Schema.Attribute.Required;
    menu_links: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface LayoutServices extends Struct.ComponentSchema {
  collectionName: 'components_layout_services';
  info: {
    description: '';
    displayName: 'sekcja kart';
  };
  attributes: {
    opis: Schema.Attribute.Text;
    tytul: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.link': ElementsLink;
      'elements.list': ElementsList;
      'elements.list-two': ElementsListTwo;
      'elements.logo': ElementsLogo;
      'layout.about': LayoutAbout;
      'layout.benefits': LayoutBenefits;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.services': LayoutServices;
    }
  }
}
