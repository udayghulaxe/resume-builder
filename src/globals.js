export const richEditorSettings = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        [{ color: [] }, { background: [] }],
        ['link', 'image'],
        ['clean'],
    ],
};

export const initialData = {
    resumeSettings: {
        bodyFontSize: 'small',
        headingFontSize: 'large',
        subheadingFontSize: 'small',
        bodyFontColor: '#000000',
        headingFontColor: '#000000',
        subheadingFontColor: '#000000',
        headerBackgroundColor: '#ffffff',
        mainBackgroundColor: '#ffffff',
        sidebarBackgroundColor: '#ffffff',
        sidebarHeadingColor: '#000000',
        sidebarBodyColor: '#000000',
        aboutSectionFontColor: '#000000',
        headingAlignment: 'left',
        sidebar: true,
        sidebarPosition: 'right',
    },
    resumeJson: {
        header: [
            {
                name: 'BasicInfo',
                componentType: 'BasicInfo',
                path: 'BasicInfo/BasicInfo',
            },
            {
                name: 'ProfessionalSummary',
                componentType: 'ProfessionalSummary',
                path: 'ProfessionalSummary/ProfessionalSummary',
                componentData: {
                    title: 'Professional Summary',
                    items: [
                        {
                            summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                        },
                    ],
                    hideTitle: false,
                },
            },
        ],
        main: [
            {
                name: 'Education',
                componentType: 'Education',
                path: 'Education/Education',
                componentData: {
                    title: 'Education',
                    items: [
                        {
                            title: 'Executive MBA, Engineering Management',
                            university: 'The University of Arizona',
                            date: '2010 - 2014',
                            gpa: 'CGPA 09/10',
                        },
                        {
                            title: 'Engineering Management',
                            university: 'The University of California, Berkeley',
                            date: '2008 - 2010',
                            gpa: 'CGPA 7.5/10',
                        },
                    ],
                },
            },
            {
                name: 'Achievements',
                componentType: 'Achievements',
                path: 'Achievements/Achievement',
                componentData: {
                    title: 'Achievements',
                    showIcon: true,
                    items: [
                        {
                            title: 'Won Best Employee Award for last 2 consecutive year (2020 & 2021). Won Best Employee Award for last 2 consecutive year (2020 & 2021).',
                        },
                        { title: 'Won inter-zone cricket competition (2020). ' },
                        {
                            title: 'Runner up for state level table tennis competition (2020).',
                        },
                    ],
                },
            },
            {
                name: 'Experience',
                componentType: 'Experience',
                path: 'Experience/Experience',
                componentData: {
                    title: 'Experience',
                    timelineFormat: true,
                    items: [
                        {
                            experienceTitle: 'Android Developer',
                            company: 'Google',
                            date: '2018 - 2020',
                            location: 'New York',
                            experienceSummary:
                                'Worked with team of 5 members and provided end-to-end solutions for clients & Lead developer in 3 key projects of major clients.',
                        },
                        {
                            experienceTitle: 'Front End Developer',
                            company: 'Amazon',
                            date: '2014 - 2018',
                            location: 'New York',
                            experienceSummary:
                                'Worked with team of 5 members and provided end-to-end solutions for clients & Lead developer in 4 key projects of major clients.',
                        },
                    ],
                },
            },
        ],
        sidebar: [
            {
                name: 'Skills',
                componentType: 'Skills',
                path: 'Skills/Skills',
                componentData: {
                    title: 'Skills',
                    filled: false,
                    rounded: true,
                    items: [{ title: 'HTML' }, { title: 'CSS' }, { title: 'JavaScript' }, { title: 'React' }],
                },
            },
            {
                name: 'Tools',
                componentType: 'Skills',
                path: 'Skills/Skills',
                componentData: {
                    title: 'Tools',
                    filled: false,
                    rounded: true,
                    items: [{ title: 'Git' }, { title: 'Webpack' }, { title: 'Gulp' }],
                },
            },
            {
                name: 'Hobbies',
                componentType: 'Skills',
                path: 'Skills/Skills',
                componentData: {
                    title: 'Hobbies',
                    filled: false,
                    rounded: true,
                    items: [{ title: 'Reading' }, { title: 'Swimming' }, { title: 'Hiking' }],
                },
            },
            {
                name: 'Social',
                componentType: 'Social',
                path: 'Social/Social',
                componentData: {
                    title: 'Social',
                    items: [
                        {
                            socialPlatform: 'Github',
                            username: '@username',
                        },
                        {
                            socialPlatform: 'LinkedIn',
                            username: '@username',
                        },
                    ],
                },
            },
        ],
        pageTwo: [],
        componentLibrary: [
            {
                name: 'Languages',
                componentType: 'Languages',
                path: 'Languages/Languages',
                componentData: {
                    title: 'Languages',
                    showProficiency: true,
                    showProficiencyProgress: true,
                    proficiencyProgressColor: '#4f50d5',
                    items: [
                        { language: 'English', proficiency: 'Proficient' },
                        { language: 'Hindi', proficiency: 'Native' },
                        { language: 'Spanish', proficiency: 'Beginner' },
                    ],
                },
            },
            {
                name: 'DoughnutCharts',
                componentType: 'PieCharts',
                path: 'PieCharts/PieCharts',
                componentData: {
                    title: 'Doughnut Chart',
                    chartColor: '#4f50d5',
                    pieChart: false,
                    items: [
                        { title: 'Teamwork', value: 40, color: 'rgb(79, 80, 213, 1)' },
                        { title: 'Creativity', value: 20, color: 'rgb(79, 80, 213, 0.9)' },
                        { title: 'Communication', value: 10, color: 'rgb(79, 80, 213, 0.8)' },
                        { title: 'Networking', value: 10, color: 'rgb(79, 80, 213, 0.7)'},
                        { title: 'Leadership', value: 20, color: 'rgb(79, 80, 213, 0.6)' },
                    ]
                },
            },
            {
                name: 'SkillsWithProgress',
                componentType: 'SkillsWithProgress',
                path: 'SkillsWithProgress/SkillsWithProgress',
                componentData: {
                    title: 'Skills',
                    showProficiency: true,
                    showProficiencyProgress: true,
                    proficiencyProgressColor: '#4f50d5',
                    items: [
                        { title: 'HTML', proficiency: 80 },
                        { title: 'CSS', proficiency: 80 },
                        { title: 'Javascript', proficiency: 70 },
                        { title: 'React', proficiency: 50 },
                    ],
                },
            },
            {
                name: 'Divider',
                componentType: 'Divider',
                path: 'Divider/Divider',
                componentData: {
                    title: 'Divider',
                    styles: [
                        {
                            type: 'select',
                            label: 'Style',
                            rule: 'borderStyle',
                            value: 'double',
                            unit: '',
                            options: [
                                'dotted',
                                'dashed',
                                'solid',
                                'double',
                                'groove',
                                'ridge',
                                'inset',
                                'outset',
                                'hidden',
                            ],
                        },
                        { type: 'number', label: 'Width', rule: 'width', value: '100', unit: '%' },
                        { type: 'number', label: 'Height', rule: 'borderWidth', value: '4', unit: 'px' },
                        { type: 'number', label: 'Space Above', rule: 'marginTop', value: '15', unit: 'px' },
                        { type: 'number', label: 'Space Below', rule: 'marginBottom', value: '15', unit: 'px' },
                    ],
                },
            },
            {
                name: 'PieCharts',
                componentType: 'PieCharts',
                path: 'PieCharts/PieCharts',
                componentData: {
                    title: 'Pie Chart',
                    chartColor: '#4f50d5',
                    pieChart: true,
                    items: [
                        { title: 'Ms Word', value: 40, color: 'rgb(79, 80, 213, 1)' },
                        { title: 'Ms Excel', value: 40, color: 'rgb(79, 80, 213, 0.9)' },
                        { title: 'Photoshop', value: 20, color: 'rgb(79, 80, 213, 0.8)' },
                    ]
                },
            },
            {
                name: 'RichText',
                componentType: 'ProfessionalSummary',
                path: 'ProfessionalSummary/ProfessionalSummary',
                componentData: {
                    title: 'Rich Text',
                    items: [
                        {
                            summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                        },
                    ],
                    hideTitle: true,
                },
            },
        ],
    },
};

export const colors = [
    '#000000',
    '#ffffff',
    '#483d8b',
    '#2D2424',
    '#2f4f4f',
    '#bdb76b',
    '#183141',
    '#ffd700',
    '#D9E2E9',
    '#A0BCC2',
    '#94AA9E',
    '#B5282E',
    '#808000',
    '#4f50d5',
    '#FBECD7',
    '#09915A',
];

export const fontSizes = [
    {
        value: 'x-small',
        label: 'XS',
    },
    {
        value: 'small',
        label: 'S',
    },
    {
        value: 'medium',
        label: 'M',
    },
    {
        value: 'large',
        label: 'L',
    },
    {
        value: 'larger',
        label: 'XL',
    },
];

export const headingAlignment = [
    {
        value: 'left',
        label: 'Left',
    },
    {
        value: 'center',
        label: 'Center',
    },
    {
        value: 'right',
        label: 'Right',
    },
];
