import React from "react";

import MenuItem from "../menu-item/menu-items.component";

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'Hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
              },
              {
                title: 'Jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'Sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'Womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'Mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }]
        };
    };

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...otherSectionprops}) => (
                    <MenuItem key={id} {...otherSectionprops} />
                ))}
            </div>
        );
    };
}


export default Directory;