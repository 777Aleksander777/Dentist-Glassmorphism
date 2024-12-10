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
    name: Schema.Attribute.String &
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
    displayName: 'aboutOne';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutAboutFour extends Struct.ComponentSchema {
  collectionName: 'components_layout_about_fours';
  info: {
    displayName: 'aboutFour';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'elements.list', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface LayoutAboutThree extends Struct.ComponentSchema {
  collectionName: 'components_layout_about_threes';
  info: {
    displayName: 'aboutThree';
  };
  attributes: {
    descOne: Schema.Attribute.Text & Schema.Attribute.Required;
    descTwo: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'elements.list', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    titleOne: Schema.Attribute.String & Schema.Attribute.Required;
    titleTwo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutAboutTwo extends Struct.ComponentSchema {
  collectionName: 'components_layout_about_twos';
  info: {
    displayName: 'aboutTwo';
  };
  attributes: {
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'elements.list', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutBenefitsOne extends Struct.ComponentSchema {
  collectionName: 'components_layout_benefits_ones';
  info: {
    displayName: 'benefitsOne';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'elements.list', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutBenefitsTwo extends Struct.ComponentSchema {
  collectionName: 'components_layout_benefits_twos';
  info: {
    displayName: 'benefitsTwo';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'elements.list', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutExpertise extends Struct.ComponentSchema {
  collectionName: 'components_layout_expertise';
  info: {
    displayName: 'expertise';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFaq extends Struct.ComponentSchema {
  collectionName: 'components_layout_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    list: Schema.Attribute.Component<'elements.list', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    desc: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['ONE', 'TWO']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'ONE'>;
  };
}

export interface LayoutServices extends Struct.ComponentSchema {
  collectionName: 'components_layout_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutStaff extends Struct.ComponentSchema {
  collectionName: 'components_layout_staff';
  info: {
    displayName: 'staff';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.link': ElementsLink;
      'elements.list': ElementsList;
      'elements.logo': ElementsLogo;
      'layout.about': LayoutAbout;
      'layout.about-four': LayoutAboutFour;
      'layout.about-three': LayoutAboutThree;
      'layout.about-two': LayoutAboutTwo;
      'layout.benefits-one': LayoutBenefitsOne;
      'layout.benefits-two': LayoutBenefitsTwo;
      'layout.expertise': LayoutExpertise;
      'layout.faq': LayoutFaq;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero': LayoutHero;
      'layout.services': LayoutServices;
      'layout.staff': LayoutStaff;
    }
  }
}
