var Get_yanthai = (function() {

    var description = {
        "0": `example1`,
        "1": `example2`,
        "2": `example3`,
        "3": `example4`,
        "4": `example5`,
        "5": `example6`
    }

    var produces = function() {

        var data = {};

        var temp = new item(prod_id("001"));
        temp.name = "Tiger Head";
        temp.imgs.ex = "https://displate.com/image-visualisation/standard/16/2017-11-11/6e3c2ce2aa5cdab200ea85a742ab7dd2_c0bf121574cc03533d84b9c7246cfce5.jpg?w=640&h=640&v=3";
        temp.imgs.album.push(
            "url1",
            "url2",
            "url3"
        );
        temp.details.desc = description[0];
        temp.details.itemsize.m.imgs.push(
            "https://displate.com/image-visualisation/standard/16/2017-11-11/6e3c2ce2aa5cdab200ea85a742ab7dd2_c0bf121574cc03533d84b9c7246cfce5.jpg",
            "https://displate.com/image-visualisation/standard/14/2017-11-11/6e3c2ce2aa5cdab200ea85a742ab7dd2_c0bf121574cc03533d84b9c7246cfce5.jpg",
            "https://displate.com/image-visualisation/standard/23/2017-11-11/6e3c2ce2aa5cdab200ea85a742ab7dd2_c0bf121574cc03533d84b9c7246cfce5.jpg"
        );
        temp.details.itemsize.l.imgs.push(
            "https://displate.com/image-visualisation/large/16/2017-11-11/6e3c2ce2aa5cdab200ea85a742ab7dd2_c0bf121574cc03533d84b9c7246cfce5.jpg",
            "https://displate.com/image-visualisation/large/14/2017-11-11/6e3c2ce2aa5cdab200ea85a742ab7dd2_c0bf121574cc03533d84b9c7246cfce5.jpg",
            "https://displate.com/image-visualisation/large/23/2017-11-11/6e3c2ce2aa5cdab200ea85a742ab7dd2_c0bf121574cc03533d84b9c7246cfce5.jpg"
        );
        temp.details.itemsize.xl.imgs.push(
            "https://displate.com/image-visualisation/xl/16/2017-11-11/6e3c2ce2aa5cdab200ea85a742ab7dd2_c0bf121574cc03533d84b9c7246cfce5.jpg",
            "https://displate.com/image-visualisation/xl/14/2017-11-11/6e3c2ce2aa5cdab200ea85a742ab7dd2_c0bf121574cc03533d84b9c7246cfce5.jpg",
            "https://displate.com/image-visualisation/xl/23/2017-11-11/6e3c2ce2aa5cdab200ea85a742ab7dd2_c0bf121574cc03533d84b9c7246cfce5.jpg"
        );
        data[1] = temp;
        var temp = new item(prod_id("002"));
        temp.name = "Itipiso 8 directions";
        temp.imgs.ex = "https://displate.com/image-visualisation/standard/16/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg?w=640&h=640&v=3";
        temp.imgs.album.push(
            "https://displate.com/image-visualisation/standard/16/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg",
            "https://displate.com/image-visualisation/standard/14/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg",
            "https://displate.com/image-visualisation/standard/23/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg"
        );
        temp.details.desc = description[1];
        temp.details.itemsize.m.imgs.push(
            "https://displate.com/image-visualisation/standard/16/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg",
            "https://displate.com/image-visualisation/standard/14/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg",
            "https://displate.com/image-visualisation/standard/23/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg"
        );
        temp.details.itemsize.l.imgs.push(
            "https://displate.com/image-visualisation/large/16/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg",
            "https://displate.com/image-visualisation/large/14/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg",
            "https://displate.com/image-visualisation/large/23/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg"
        );
        temp.details.itemsize.xl.imgs.push(
            "https://displate.com/image-visualisation/xl/16/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg",
            "https://displate.com/image-visualisation/xl/14/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg",
            "https://displate.com/image-visualisation/xl/23/2017-10-16/760080d0a33a7a488fe1971428ad79b1_5af4395ff6f3ef7df8063c9c64f625cf.jpg"
        );
        data[2] = temp;

        var temp = new item(prod_id("003"));
        temp.name = "Victory";
        temp.imgs.ex = "https://displate.com/image-visualisation/standard/16/2017-11-11/2c397c0f6e896832ea2e7596576d72b9_b02dec3d53ec1f88b500f8762561db7d.jpg?w=640&h=640&v=3";
        temp.imgs.album.push(
            "url1",
            "url2",
            "url3"
        );
        temp.details.desc = description[2];
        temp.details.itemsize.m.imgs.push(
            "https://displate.com/image-visualisation/standard/16/2017-11-11/2c397c0f6e896832ea2e7596576d72b9_b02dec3d53ec1f88b500f8762561db7d.jpg",
            "https://displate.com/image-visualisation/standard/14/2017-11-11/2c397c0f6e896832ea2e7596576d72b9_b02dec3d53ec1f88b500f8762561db7d.jpg",
            "https://displate.com/image-visualisation/standard/23/2017-11-11/2c397c0f6e896832ea2e7596576d72b9_b02dec3d53ec1f88b500f8762561db7d.jpg"
        );
        temp.details.itemsize.l.imgs.push(
            "https://displate.com/image-visualisation/large/16/2017-11-11/2c397c0f6e896832ea2e7596576d72b9_b02dec3d53ec1f88b500f8762561db7d.jpg",
            "https://displate.com/image-visualisation/large/14/2017-11-11/2c397c0f6e896832ea2e7596576d72b9_b02dec3d53ec1f88b500f8762561db7d.jpg",
            "https://displate.com/image-visualisation/large/23/2017-11-11/2c397c0f6e896832ea2e7596576d72b9_b02dec3d53ec1f88b500f8762561db7d.jpg"
        );
        temp.details.itemsize.xl.imgs.push(
            "https://displate.com/image-visualisation/xl/16/2017-11-11/2c397c0f6e896832ea2e7596576d72b9_b02dec3d53ec1f88b500f8762561db7d.jpg",
            "https://displate.com/image-visualisation/xl/14/2017-11-11/2c397c0f6e896832ea2e7596576d72b9_b02dec3d53ec1f88b500f8762561db7d.jpg",
            "https://displate.com/image-visualisation/xl/23/2017-11-11/2c397c0f6e896832ea2e7596576d72b9_b02dec3d53ec1f88b500f8762561db7d.jpg"
        );
        data[3] = temp;

        var temp = new item(prod_id("004"));
        temp.name = "Wealth";
        temp.imgs.ex = "https://displate.com/image-visualisation/standard/16/2017-11-11/c38db81ca8f4c37c44f63a1829c115bc_8a10d08cf5a1b87d28f4636311a812a7.jpg?w=640&h=640&v=3";
        temp.imgs.album.push(
            "url1",
            "url2",
            "url3"
        );
        temp.details.desc = description[3];
        temp.details.itemsize.m.imgs.push(
            "https://displate.com/image-visualisation/standard/16/2017-11-11/c38db81ca8f4c37c44f63a1829c115bc_8a10d08cf5a1b87d28f4636311a812a7.jpg",
            "https://displate.com/image-visualisation/standard/14/2017-11-11/c38db81ca8f4c37c44f63a1829c115bc_8a10d08cf5a1b87d28f4636311a812a7.jpg",
            "https://displate.com/image-visualisation/standard/23/2017-11-11/c38db81ca8f4c37c44f63a1829c115bc_8a10d08cf5a1b87d28f4636311a812a7.jpg"
        );
        temp.details.itemsize.l.imgs.push(
            "https://displate.com/image-visualisation/large/16/2017-11-11/c38db81ca8f4c37c44f63a1829c115bc_8a10d08cf5a1b87d28f4636311a812a7.jpg",
            "https://displate.com/image-visualisation/large/14/2017-11-11/c38db81ca8f4c37c44f63a1829c115bc_8a10d08cf5a1b87d28f4636311a812a7.jpg",
            "https://displate.com/image-visualisation/large/23/2017-11-11/c38db81ca8f4c37c44f63a1829c115bc_8a10d08cf5a1b87d28f4636311a812a7.jpg"
        );
        temp.details.itemsize.xl.imgs.push(
            "https://displate.com/image-visualisation/xl/16/2017-11-11/c38db81ca8f4c37c44f63a1829c115bc_8a10d08cf5a1b87d28f4636311a812a7.jpg",
            "https://displate.com/image-visualisation/xl/14/2017-11-11/c38db81ca8f4c37c44f63a1829c115bc_8a10d08cf5a1b87d28f4636311a812a7.jpg",
            "https://displate.com/image-visualisation/xl/23/2017-11-11/c38db81ca8f4c37c44f63a1829c115bc_8a10d08cf5a1b87d28f4636311a812a7.jpg"
        );
        data[4] = temp;

        var temp = new item(prod_id("005"));
        temp.name = "Tiger Looking Back";
        temp.imgs.ex = "https://displate.com/image-visualisation/standard/16/2017-11-11/991b3246af0a0acfb03c3d28c94b83dc_d842ed3222a0d77302e339d637775e2b.jpg?w=640&h=640&v=3";
        temp.imgs.album.push(
            "url1",
            "url2",
            "url3"
        );
        temp.details.desc = description[4];
        temp.details.itemsize.m.imgs.push(
            "https://displate.com/image-visualisation/standard/16/2017-11-11/991b3246af0a0acfb03c3d28c94b83dc_d842ed3222a0d77302e339d637775e2b.jpg",
            "https://displate.com/image-visualisation/standard/14/2017-11-11/991b3246af0a0acfb03c3d28c94b83dc_d842ed3222a0d77302e339d637775e2b.jpg",
            "https://displate.com/image-visualisation/standard/23/2017-11-11/991b3246af0a0acfb03c3d28c94b83dc_d842ed3222a0d77302e339d637775e2b.jpg"
        );
        temp.details.itemsize.l.imgs.push(
            "https://displate.com/image-visualisation/large/16/2017-11-11/991b3246af0a0acfb03c3d28c94b83dc_d842ed3222a0d77302e339d637775e2b.jpg",
            "https://displate.com/image-visualisation/large/14/2017-11-11/991b3246af0a0acfb03c3d28c94b83dc_d842ed3222a0d77302e339d637775e2b.jpg",
            "https://displate.com/image-visualisation/large/23/2017-11-11/991b3246af0a0acfb03c3d28c94b83dc_d842ed3222a0d77302e339d637775e2b.jpg"
        );
        temp.details.itemsize.xl.imgs.push(
            "https://displate.com/image-visualisation/xl/16/2017-11-11/991b3246af0a0acfb03c3d28c94b83dc_d842ed3222a0d77302e339d637775e2b.jpg",
            "https://displate.com/image-visualisation/xl/14/2017-11-11/991b3246af0a0acfb03c3d28c94b83dc_d842ed3222a0d77302e339d637775e2b.jpg",
            "https://displate.com/image-visualisation/xl/23/2017-11-11/991b3246af0a0acfb03c3d28c94b83dc_d842ed3222a0d77302e339d637775e2b.jpg"
        );
        data[5] = temp;

        var temp = new item(prod_id("006"));
        temp.name = "Nine Tails";
        temp.imgs.ex = "https://displate.com/image-visualisation/standard/16/2017-11-11/1afaa76cec269d45ac8ca68ee0edfcd7_e70acbd3b71129817d965814226327f2.jpg?w=640&h=640&v=3";
        temp.imgs.album.push(
            "url1",
            "url2",
            "url3"
        );
        temp.details.desc = description[5];
        temp.details.itemsize.m.imgs.push(
            "https://displate.com/image-visualisation/standard/16/2017-11-11/1afaa76cec269d45ac8ca68ee0edfcd7_e70acbd3b71129817d965814226327f2.jpg",
            "https://displate.com/image-visualisation/standard/14/2017-11-11/1afaa76cec269d45ac8ca68ee0edfcd7_e70acbd3b71129817d965814226327f2.jpg",
            "https://displate.com/image-visualisation/standard/23/2017-11-11/1afaa76cec269d45ac8ca68ee0edfcd7_e70acbd3b71129817d965814226327f2.jpg"
        );
        temp.details.itemsize.l.imgs.push(
            "https://displate.com/image-visualisation/large/16/2017-11-11/1afaa76cec269d45ac8ca68ee0edfcd7_e70acbd3b71129817d965814226327f2.jpg",
            "https://displate.com/image-visualisation/large/14/2017-11-11/1afaa76cec269d45ac8ca68ee0edfcd7_e70acbd3b71129817d965814226327f2.jpg",
            "https://displate.com/image-visualisation/large/23/2017-11-11/1afaa76cec269d45ac8ca68ee0edfcd7_e70acbd3b71129817d965814226327f2.jpg"
        );
        temp.details.itemsize.xl.imgs.push(
            "https://displate.com/image-visualisation/xl/16/2017-11-11/1afaa76cec269d45ac8ca68ee0edfcd7_e70acbd3b71129817d965814226327f2.jpg",
            "https://displate.com/image-visualisation/xl/14/2017-11-11/1afaa76cec269d45ac8ca68ee0edfcd7_e70acbd3b71129817d965814226327f2.jpg",
            "https://displate.com/image-visualisation/xl/23/2017-11-11/1afaa76cec269d45ac8ca68ee0edfcd7_e70acbd3b71129817d965814226327f2.jpg"
        );
        data[6] = temp;

        console.log(data)
        return data;
    }

    var item = function(id) {
        this.id = id;
        this.name = "oname";
        this.imgs = {
            ex: "example image url",
            album: []
        };
        this.details = {
            desc: "desc",
            typeprice: "usd",
            typesize: "cm",
            itemsize: {
                "m": {
                    name: "M",
                    price: "44",
                    h: "45",
                    w: "32",
                    imgs: []
                },
                "l": {
                    name: "L",
                    price: "89",
                    h: "67.5",
                    w: "48",
                    imgs: []
                },
                "xl": {
                    name: "XL",
                    price: "149",
                    h: "90",
                    w: "46",
                    imgs: []
                }
            }

        }
    }

    var prod_id = function(id) {
        return "ty" + id;
    }

    var prod_name = function(name) {
        return name;
    }


    return { get: produces }

})()