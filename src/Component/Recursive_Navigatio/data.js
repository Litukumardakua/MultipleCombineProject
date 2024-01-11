  export const  menus = [
    {
        label:"Home",
        to:"/"
    },
    {
        label:"profile",
        to:"/profile",
        children:[
            {
                label:"Details",
                to:"details",
                children:[
                    {
                        label:"Location",
                        to:"location",
                        children:[
                            {
                                label:'Random data',
                                to:"number"
                            }
                        ]
                    },
                ],
            },
        ],
    },
    {
        label:"Settings",
        to:"/settings",
        children:[
            {
                label:"Account",
                to:"account"
            },
            {
                label:"security",
                to:"security",
                children:[
                    {
                        label:"Login",
                        to:"login"
                    },
                    {
                        label:"Register",
                        to:"register",
                        children:[
                            {
                                label:'Random data',
                                to:'number'
                            }
                        ]
                    },
                ],
            },
        ]
    }
]

