import { Facebook, Twitter, Instagram, Youtube, Tiktok, Screen, Message, Paper, MessageCircle, Cart, Sv1, Sv2, Sv3, Sv4 } from "@/images/icons"
import { Blog1, Blog2, Blog3, Member1, Member2, Member3, Member4, MenuItem1, MenuItem10, MenuItem2, MenuItem3, MenuItem4, MenuItem5, MenuItem6, MenuItem7, MenuItem8, MenuItem9, SerBg1, SerBg2, SerBg3, SerBg4 } from "@/images/imgs"


const navLinks = [
    {name: "Home", path:"#"},
    {name: "About us", path:"#"},
    {name: "Contact", path:"#"}
]

const socialMediaIcons = [
    {name:"Facebook", img: Facebook, link:"#"},
    {name:"Youtube", img: Youtube, link:"#"},
    {name:"Instagram", img: Instagram, link:"#"},
    {name:"Tiktok", img: Tiktok, link:"#"},
    {name:"Twitter", img: Twitter, link:"#"},
]

const HedaerRightIcons = [
    {name:"Screen", img: Screen, link:"#"},
    {name:"Message", img: Message, link:"#"},
    {name:"Paper", img: Paper, link:"#"},
    {name:"message-circle", img: MessageCircle, link:"#"},
    {name:"cart", img: Cart, link:"#"},
]

const services = [
    {
        title:"Fresh Product",
        des:"Ligula dapibus sem sagittis, eu efficitur tellus malesuada. In hac habitasse platea.", 
        icon: Sv1, 
        bgImg: SerBg2
    },
    {
        title:"Skilled Chefs",
        des:"Ligula dapibus sem sagittis, eu efficitur tellus malesuada. In hac habitasse platea.", 
        icon: Sv2, 
        bgImg: SerBg1
    },
    {
        title:"Drinks and Wines",
        des:"Ligula dapibus sem sagittis, eu efficitur tellus malesuada. In hac habitasse platea.", 
        icon: Sv3, 
        bgImg: SerBg3
    },
    {
        title:"Vegan Cuisine",
        des:"Ligula dapibus sem sagittis, eu efficitur tellus malesuada. In hac habitasse platea.", 
        icon: Sv4, 
        bgImg: SerBg4
    },
]

const menuItems = {
    breakfast: [
        {
            img: MenuItem1,
            name: "Delicious Pancakes",
            des: "Lorem ipsum dolor sit amet, exand to consectetur",
            priceBeforeDiscount: 8,
            priceAfterDiscount: 5,
        },
        {
            img: MenuItem2,
            name: "Nan Roti & Vegetables",
            des: "Lorem ipsum dolor sit amet, exand to consectetur",
            priceBeforeDiscount: 8,
            priceAfterDiscount: 5,
        },
        {
            img: MenuItem3,
            name: "Tea & Coffee",
            des: "Lorem ipsum dolor sit amet, exand to consectetur",
            priceBeforeDiscount: 8,
            priceAfterDiscount: 5,
        },
    ],
    dinner: [
        {
            img: MenuItem4,
            name: "Grilled Chicken",
            des: "Lorem ipsum dolor sit amet, exand to consectetur",
            priceBeforeDiscount: 8,
            priceAfterDiscount: 5,
        },
        {
            img: MenuItem5,
            name: "Fast food",
            des: "Lorem ipsum dolor sit amet, exand to consectetur",
            priceBeforeDiscount: 8,
            priceAfterDiscount: 5,
        },
    ],
    lunch: [
        {
            img: MenuItem6,
            name: "Kachchi Biryani",
            des: "Lorem ipsum dolor sit amet, exand to consectetur",
            priceBeforeDiscount: 8,
            priceAfterDiscount: 5,
        },
        {
            img: MenuItem7,
            name: "Morog Polao",
            des: "Lorem ipsum dolor sit amet, exand to consectetur",
            priceBeforeDiscount: 8,
            priceAfterDiscount: 5,
        },
    ],
    drinks: [
        {
            img: MenuItem8,
            name: "Misti Doi Sweet Yogurt",
            des: "Lorem ipsum dolor sit amet, exand to consectetur",
            priceBeforeDiscount: 8,
            priceAfterDiscount: 5,
        },
        {
            img: MenuItem9,
            name: "Soft Drinks",
            des: "Lorem ipsum dolor sit amet, exand to consectetur",
            priceBeforeDiscount: 8,
            priceAfterDiscount: 5,
        },
        {
            img: MenuItem10,
            name: "Sweet Lassi",
            des: "Lorem ipsum dolor sit amet, exand to consectetur",
            priceBeforeDiscount: 8,
            priceAfterDiscount: 5,
        },
    ]
}

const team = [
    {
        img: Member1,
        name: "Camila Sofia",
        jobTitle: "Master Chef"
    },
    {
        img: Member2,
        name: "Mila Violet",
        jobTitle: "Kitchen manager"
    },
    {
        img: Member3,
        name: "Gianna Aria",
        jobTitle: "Executive chef"
    },
    {
        img: Member4,
        name: "Hazel Nora",
        jobTitle: "General manager"
    }
]


const blogs = [
    {
        img: Blog3,
        title: "The pan pacific lounge buffet menu price and address ",
        auth: "Tanvir",
        comments: 2
    },
    {
        img: Blog1,
        title: "Buffet stories canada menu price items and contact no",
        auth: "Tanvir",
        comments: 2
    },
    {
        img: Blog2,
        title: "White hall buffet menu price address and good review ",
        auth: "Tanvir",
        comments: 2
    },
]

const footer = [
    {
        title: "Social",
        links: [
            {name: "Facebook", path: "#"},
            {name: "Twitter", path: "#"},
            {name: "Instagram", path: "#"},
            {name: "Pinterest", path: "#"},
        ]
    },
    {
        title: "More Service",
        links: [
            {name: "About us", path: "#"},
            {name: "Case Studies", path: "#"},
            {name: "Privacy Policy", path: "#"},
            {name: "Contact us", path: "#"},
        ]
    },
    {
        title: "Working Hours",
        links: [
            {name: "SUNDAY TO TUESDAY\n 7.00am – 6.00pm", path: "#"},
            {name: "FRIDAY TO SATURDAY\n 8.00am – 6.00pm", path: "#"},
        ]
    },
    {
        title: "Contact",
        links: [
            {name: "785 15h Street - Sydney Harbor\n Bridge of Sydney, #Australia.", path: "#"},
            {name: "contact@resfolio.com", path: "#"},
            {name: "+444 3322 111 00", path: "#"},
        ]
    },
]

export {navLinks, socialMediaIcons, HedaerRightIcons, services, menuItems, team, blogs, footer}