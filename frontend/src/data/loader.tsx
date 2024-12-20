import { getBackendUrl } from "@/lib/utils";
import qs from "qs";

const baseUrl = getBackendUrl();

async function fetchData(url: string) {
    const authToken = null;
    const headers = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
        },
    };

    try{
        const res = await fetch(url, authToken ? headers: {});
        const data = await res.json();
        return data;
    } catch(error) {
        console.error("Cannot fetch data: " + error);
        throw error;
    }
}

export async function getBuisnessData() {

  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: {
      footer: true
    }
  })

  return await fetchData(url.href);
}

export async function getGlobalData() {

    const url = new URL("/api/global", baseUrl);

    url.search = qs.stringify({
        populate: {
            header: {
                populate: {
                    logo: {
                        populate: {
                            logoImage: {
                                fields: ["url", "name", "alternativeText", "height", "width"],
                            }
                        }
                    },
                    headerLinks: true,
                    cta: true,
                }
            },
            footer: {
                populate: {
                    logo: {
                        populate: {
                            logoImage: {
                                fields: ["url", "name", "alternativeText", "height", "width"],                                
                            }
                        }
                    },
                    footerLinks: true,
                }
            }
        }
    })


    return await fetchData(url.href);
}

export async function getHome() {

    const url = new URL("/api/home-page", baseUrl);

    url.search = qs.stringify({
        // populate: {
        //     blocks: {
        //       on: {
        //         "layout.hero": {
        //           populate: {
        //             img: {
        //               fields: ["url", "alternativeText", "width", "height"]
        //             },
        //             button: true
        //           }
        //         },
        //         "layout.benefits-one": {
        //           populate: {
        //             img: {
        //               fields: ["url", "alternativeText", "width", "height"]
        //             },
        //             button: true,
        //             list: true,
        //           }
        //         },
        //         "layout.benefits-two": {
        //           populate: {
        //             img: {
        //               fields: ["url", "alternativeText", "width", "height"]
        //             },
        //             button: true,
        //             list: true,
        //           }
        //         },
        //         "layout.about": {
        //           populate: {
        //             img: {
        //               fields: ["url", "alternativeText", "width", "height"]
        //             },
        //             button: true,
        //           }
        //         },
        //         "layout.about-two": {
        //           populate: {
        //             img: {
        //               fields: ["url", "alternativeText", "width", "height"]
        //             },
        //             list: true,
        //           }
        //         },
        //         "layout.about-three": {
        //           populate: {
        //             img: {
        //               fields: ["url", "alternativeText", "width", "height"]
        //             },
        //             list: true,
        //           }
        //         },
        //         "layout.about-four": {
        //           populate: {
        //             video: {
        //               fields: ["url", "alternativeText", "width", "height"]
        //             },
        //             button: true,
        //             list: true,
        //           }
        //         },
        //         "layout.staff": {
        //           populate: '*'
        //         },
        //         "layout.services": {
        //           populate: '*'
        //         },
        //         "layout.faq": {
        //           populate: {
        //             list:true,
        //           }
        //         },
        //         "layout.expertise": {
        //           populate: {
        //             button:true,
        //           }
        //         },
        //       }
        //     }
        // }
        populate: {
          img: {
            fields: ["url", "alternativeText", "width", "height"],
          },
          blocks: {
            on: {
              "layout.cards-section": {
                populate: {
                  carts: {
                    populate: {
                      img: {
                        fields: ["url", "alternativeText", "width", "height"]
                      }
                    }
                  }
                }
              },
              "layout.gallery-section": {
                populate: {
                  imgs: {
                    fields: ["url", "alternativeText", "width", "height"]
                  },
                  button: true
                }
              },
              "layout.info-section": {
                populate: {
                  img: {
                    fields: ["url", "alternativeText", "width", "height"]
                  },
                  button: true
                }
              }
            }
          }
        }
    })

    return await fetchData(url.href);
}

export async function getServices() {

  const url = new URL("/api/services-page", baseUrl);

  url.search = qs.stringify({
    // populate: {
    //     blocks: {
    //       on: {
    //         "layout.hero": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             button: true
    //           }
    //         },
    //         "layout.benefits-one": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             button: true,
    //             list: true,
    //           }
    //         },
    //         "layout.benefits-two": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             button: true,
    //             list: true,
    //           }
    //         },
    //         "layout.about": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             button: true,
    //           }
    //         },
    //         "layout.about-two": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             list: true,
    //           }
    //         },
    //         "layout.about-three": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             list: true,
    //           }
    //         },
    //         "layout.about-four": {
    //           populate: {
    //             video: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             button: true,
    //             list: true,
    //           }
    //         },
    //         "layout.staff": {
    //           populate: '*'
    //         },
    //         "layout.services": {
    //           populate: '*'
    //         },
    //         "layout.faq": {
    //           populate: {
    //             list:true,
    //           }
    //         },
    //         "layout.expertise": {
    //           populate: {
    //             button:true,
    //           }
    //         },
    //       }
    //     }
    // }
    populate: {
      video: true,
      blocks: {
        on: {
          "layout.cards-section": {
            populate: {
              carts: {
                populate: {
                  img: {
                    fields: ["url", "alternativeText", "width", "height"]
                  }
                }
              }
            }
          },
          "layout.gallery-section": {
            populate: {
              imgs: {
                fields: ["url", "alternativeText", "width", "height"]
              },
              button: true
            }
          },
          "layout.info-section": {
            populate: {
              img: {
                fields: ["url", "alternativeText", "width", "height"]
              },
              button: true
            }
          }
        }
      }
    }
  })

  return await fetchData(url.href);
}
export async function getAbout() {

  const url = new URL("/api/about-page", baseUrl);

  url.search = qs.stringify({
    // populate: {
    //     blocks: {
    //       on: {
    //         "layout.hero": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             button: true
    //           }
    //         },
    //         "layout.benefits": {
    //           populate: {
    //             imgs: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             button: true
    //           }
    //         },
    //         "layout.benefits-one": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             button: true,
    //             list: true,
    //           }
    //         },
    //         "layout.benefits-two": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             button: true,
    //             list: true,
    //           }
    //         },
    //         "layout.about": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             button: true,
    //           }
    //         },
    //         "layout.about-two": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             list: true,
    //           }
    //         },
    //         "layout.about-three": {
    //           populate: {
    //             img: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             list: true,
    //           }
    //         },
    //         "layout.about-four": {
    //           populate: {
    //             video: {
    //               fields: ["url", "alternativeText", "width", "height"]
    //             },
    //             button: true,
    //             list: true,
    //           }
    //         },
    //         "layout.staff": {
    //           populate: '*'
    //         },
    //         "layout.services": {
    //           populate: '*'
    //         },
    //         "layout.faq": {
    //           populate: {
    //             list:true,
    //           }
    //         },
    //         "layout.expertise": {
    //           populate: {
    //             button:true,
    //           }
    //         },
    //       }
    //     }
    // }
    populate: {
      video: true,
      blocks: {
        on: {
          "layout.cards-section": {
            populate: {
              carts: {
                populate: {
                  img: {
                    fields: ["url", "alternativeText", "width", "height"]
                  }
                }
              }
            }
          },
          "layout.gallery-section": {
            populate: {
              imgs: {
                fields: ["url", "alternativeText", "width", "height"]
              },
              button: true
            }
          },
          "layout.info-section": {
            populate: {
              img: {
                fields: ["url", "alternativeText", "width", "height"]
              },
              button: true
            }
          }
        }
      }
    }
  })

  return await fetchData(url.href);
}

export async function getOffers() {

  const url = new URL('/api/services', baseUrl);

  url.search = qs.stringify({
    populate: {
      img: {
        fields: ["url", "alternativeText", "width", "height"]
      }
    }
  })

  return await fetchData(url.href);

}