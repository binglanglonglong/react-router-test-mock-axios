let Mock = require("mockjs");
module.exports = Mock.mock({
    "swiper|5": [
        {
            id: "@id",
            img: "@image(100x100,@color)"
        }
    ],
    "imgText|12":[
        {
            id: "@id",
            img: "@image(100x100,@color)",
            text: "@ctitle(2,5)"
        }
    ]
})