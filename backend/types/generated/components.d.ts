import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsCart extends Struct.ComponentSchema {
  collectionName: 'components_elements_carts';
  info: {
    displayName: 'cart';
  };
  attributes: {
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutCardsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_cards_sections';
  info: {
    displayName: 'cards section';
  };
  attributes: {
    carts: Schema.Attribute.Component<'elements.cart', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    address: Schema.Attribute.RichText;
    contact: Schema.Attribute.RichText;
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
    workingHours: Schema.Attribute.RichText;
  };
}

export interface LayoutGallerySection extends Struct.ComponentSchema {
  collectionName: 'components_layout_gallery_sections';
  info: {
    displayName: 'gallery section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    imgs: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    headerLinks: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    logo: Schema.Attribute.Component<'elements.logo', false> &
      Schema.Attribute.Required;
  };
}

export interface LayoutInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_info_sections';
  info: {
    displayName: 'info section';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.cart': ElementsCart;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'layout.cards-section': LayoutCardsSection;
      'layout.footer': LayoutFooter;
      'layout.gallery-section': LayoutGallerySection;
      'layout.header': LayoutHeader;
      'layout.info-section': LayoutInfoSection;
    }
  }
}
