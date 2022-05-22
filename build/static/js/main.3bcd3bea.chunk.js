(this['webpackJsonpresume-builder'] = this['webpackJsonpresume-builder'] || []).push([
    [0],
    {
        263: function (e, t, n) {},
        264: function (e, t, n) {},
        272: function (e, t, n) {},
        273: function (e, t, n) {},
        377: function (e, t, n) {},
        379: function (e, t, n) {},
        380: function (e, t, n) {},
        381: function (e, t, n) {},
        382: function (e, t, n) {},
        403: function (e, t, n) {},
        404: function (e, t, n) {},
        405: function (e, t, n) {},
        406: function (e, t, n) {},
        407: function (e, t, n) {},
        408: function (e, t, n) {},
        409: function (e, t, n) {},
        410: function (e, t, n) {
            'use strict';
            n.r(t);
            var a = n(0),
                c = n.n(a),
                s = n(30),
                i = n.n(s),
                o = (n(263), n(264), n(70)),
                r = n(34),
                l = n(25),
                d = n(459),
                m = n(488),
                u = n(490),
                j = n(487),
                b = n.p + 'static/media/logo.6ce24c58.svg',
                p = n(4),
                O = n(6),
                g = n(22),
                h = n(23),
                f = n(484),
                x = n(38),
                v = { isSignedIn: null != localStorage.getItem('token'), userId: null, name: null, email: null },
                y = Object(x.c)({
                    name: 'auth',
                    initialState: v,
                    reducers: {
                        signInAction: function (e, t) {
                            (e.isSignedIn = !0),
                                (e.userId = t.payload.userId),
                                (e.name = t.payload.name),
                                (e.email = t.payload.email);
                        },
                        signOutAction: function (e) {
                            (e.isSignedIn = !1), (e.userId = null), (e.name = null), (e.email = null);
                        },
                    },
                }),
                N = y.actions,
                C = N.signInAction,
                S = N.signOutAction,
                k = y.reducer,
                I = n(161);
            n(412);
            I.a.initializeApp({
                apiKey: 'AIzaSyBjh7R7l6f9rTW8Oll_uzx2q50uJNWRjbU',
                authDomain: 'resume-builder-c4248.firebaseapp.com',
                projectId: 'resume-builder-c4248',
                storageBucket: 'resume-builder-c4248.appspot.com',
                messagingSenderId: '790181104761',
                appId: '1:790181104761:web:3f3e105c4d46cd7c09d8a8',
            });
            var w = I.a,
                D = n(1),
                P = (function (e) {
                    Object(g.a)(n, e);
                    var t = Object(h.a)(n);
                    function n() {
                        var e;
                        Object(p.a)(this, n);
                        for (var a = arguments.length, c = new Array(a), s = 0; s < a; s++) c[s] = arguments[s];
                        return (
                            ((e = t.call.apply(t, [this].concat(c))).onAuthChange = function (t) {
                                t
                                    ? e.props.signInAction({
                                          userId: e.auth.currentUser.get().getId(),
                                          name: e.auth.currentUser.get().getBasicProfile().getName(),
                                          email: e.auth.currentUser.get().getBasicProfile().getEmail(),
                                      })
                                    : e.props.signOutAction();
                            }),
                            (e.onSignInClick = function () {
                                e.auth.signIn().then(function () {
                                    var t = e.auth.currentUser.get().getId(),
                                        n = e.auth.currentUser.get().getBasicProfile().getName(),
                                        a = e.auth.currentUser.get().getBasicProfile().getEmail();
                                    e.props.signInAction({
                                        userId: t,
                                        name: e.auth.currentUser.get().getBasicProfile().getName(),
                                        email: e.auth.currentUser.get().getBasicProfile().getEmail(),
                                    }),
                                        w
                                            .firestore()
                                            .collection('users')
                                            .doc(t)
                                            .get()
                                            .then(function (c) {
                                                c.exists
                                                    ? (localStorage.setItem(
                                                          'token',
                                                          e.auth.currentUser.get().getAuthResponse().id_token
                                                      ),
                                                      e.props.history.replace('resumes'))
                                                    : w
                                                          .firestore()
                                                          .collection('users')
                                                          .doc(''.concat(t))
                                                          .set({
                                                              userResumes: JSON.stringify([]),
                                                              userId: t,
                                                              name: n,
                                                              email: a,
                                                          })
                                                          .then(function () {
                                                              localStorage.setItem(
                                                                  'token',
                                                                  e.auth.currentUser.get().getAuthResponse().id_token
                                                              ),
                                                                  e.props.history.replace('resumes');
                                                          });
                                            })
                                            .catch(function (e) {
                                                console.log('Error getting document:', e);
                                            });
                                });
                            }),
                            (e.onSignOutClick = function () {
                                e.auth.signOut().then(function () {
                                    localStorage.removeItem('token'), e.props.signOutAction();
                                });
                            }),
                            e
                        );
                    }
                    return (
                        Object(O.a)(n, [
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    var e = this;
                                    window.gapi.load('client:auth2', function () {
                                        window.gapi.client
                                            .init({
                                                clientId:
                                                    '1051932499833-smce802vivdpiijmo5bg4donrr6n40fg.apps.googleusercontent.com',
                                                scope: 'email profile',
                                            })
                                            .then(function () {
                                                (e.auth = window.gapi.auth2.getAuthInstance()),
                                                    e.onAuthChange(e.auth.isSignedIn.get()),
                                                    e.auth.isSignedIn.listen(e.onAuthChange);
                                            });
                                    });
                                },
                            },
                            {
                                key: 'renderAuthButton',
                                value: function () {
                                    return null === this.props.isSignedIn
                                        ? Object(D.jsx)('div', {
                                              className: 'header-login-button-wrap',
                                              children: Object(D.jsx)(f.a, { className: 'login-loader', size: 18 }),
                                          })
                                        : this.props.isSignedIn
                                        ? Object(D.jsxs)(D.Fragment, {
                                              children: [
                                                  Object(D.jsx)(j.a, {
                                                      component: o.b,
                                                      to: '/resumes',
                                                      exact: !0,
                                                      variant: 'text',
                                                      color: 'primary',
                                                      disableElevation: !0,
                                                      className: 'mobile-d-none header-menu-link',
                                                      children: 'My Resumes',
                                                  }),
                                                  Object(D.jsx)(j.a, {
                                                      onClick: this.onSignOutClick,
                                                      variant: 'contained',
                                                      color: 'primary',
                                                      disableElevation: !0,
                                                      className: 'header-login-button',
                                                      children: 'Logout',
                                                  }),
                                              ],
                                          })
                                        : Object(D.jsx)(j.a, {
                                              onClick: this.onSignInClick,
                                              variant: 'contained',
                                              color: 'primary',
                                              disableElevation: !0,
                                              className: 'header-login-button',
                                              children: 'Create Resume',
                                          });
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return this.renderAuthButton();
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                R = { signInAction: C, signOutAction: S },
                z = Object(l.b)(function (e) {
                    return { isSignedIn: e.authReducer.isSignedIn };
                }, R)(Object(r.j)(P)),
                B =
                    (n(272),
                    function () {
                        return '/builder' !== Object(r.h)().pathname
                            ? Object(D.jsx)(d.a, {
                                  sx: { flexGrow: 1 },
                                  children: Object(D.jsx)(m.a, {
                                      elevation: 0,
                                      className: 'global-header',
                                      color: 'transparent',
                                      position: 'static',
                                      children: Object(D.jsxs)(u.a, {
                                          children: [
                                              Object(D.jsx)('img', {
                                                  src: b,
                                                  className: 'header-logo',
                                                  alt: 'Resume Builder',
                                              }),
                                              Object(D.jsx)('div', {
                                                  className: 'header-logo-text',
                                                  children: Object(D.jsx)('span', { children: 'Resume Builder' }),
                                              }),
                                              Object(D.jsxs)('nav', {
                                                  children: [
                                                      Object(D.jsx)(j.a, {
                                                          component: o.b,
                                                          to: '/',
                                                          exact: !0,
                                                          variant: 'text',
                                                          color: 'primary',
                                                          disableElevation: !0,
                                                          className: 'mobile-d-none header-menu-link',
                                                          children: 'Home',
                                                      }),
                                                      Object(D.jsx)(z, {}),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                              })
                            : Object(D.jsx)('span', {});
                    }),
                T = c.a.memo(B),
                A = n(492),
                E = (function (e) {
                    Object(g.a)(n, e);
                    var t = Object(h.a)(n);
                    function n() {
                        return Object(p.a)(this, n), t.apply(this, arguments);
                    }
                    return (
                        Object(O.a)(n, [
                            {
                                key: 'render',
                                value: function () {
                                    return Object(D.jsx)(A.a, {
                                        maxWidth: 'sm',
                                        children: Object(D.jsx)(d.a, {
                                            m: 'auto',
                                            textAlign: 'center',
                                            children: Object(D.jsx)('h1', { children: 'About' }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                F = E,
                J = (function (e) {
                    Object(g.a)(n, e);
                    var t = Object(h.a)(n);
                    function n() {
                        return Object(p.a)(this, n), t.apply(this, arguments);
                    }
                    return (
                        Object(O.a)(n, [
                            {
                                key: 'render',
                                value: function () {
                                    return Object(D.jsx)(A.a, {
                                        maxWidth: 'sm',
                                        children: Object(D.jsx)(d.a, {
                                            m: 'auto',
                                            textAlign: 'center',
                                            children: Object(D.jsx)('h1', { children: 'Contact' }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(a.Component),
                W = J,
                H = n(5),
                L = n(18),
                U = n(13),
                M = n(11),
                G = n(475),
                q = n(472),
                Y = n(479),
                _ = n(489),
                V = n(469),
                X = n(470),
                K = n(491),
                Z = n(60),
                Q = n(3),
                $ = n.n(Q),
                ee = n(10),
                te = Object(x.b)(
                    'resume/getResumeDataByResumeId',
                    (function () {
                        var e = Object(ee.a)(
                            $.a.mark(function e(t, n) {
                                var a;
                                return $.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    console.log('calling api'),
                                                    (e.next = 3),
                                                    w.firestore().collection('resumes').doc(''.concat(t)).get()
                                                );
                                            case 3:
                                                return (e.next = 5), e.sent.data();
                                            case 5:
                                                return (a = e.sent), e.abrupt('return', JSON.parse(a.resumeJson));
                                            case 7:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                ne = Object(x.b)(
                    'resume/updateResumeDataByResumeId',
                    (function () {
                        var e = Object(ee.a)(
                            $.a.mark(function e(t, n) {
                                return $.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    w
                                                        .firestore()
                                                        .collection('resumes')
                                                        .doc(''.concat(t.resumeId))
                                                        .update({ resumeJson: JSON.stringify(t.data) })
                                                );
                                            case 2:
                                                return e.abrupt('return', t.data);
                                            case 3:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                ae = Object(x.c)({
                    name: 'resumeDataSlice',
                    initialState: { resumeData: null, loading: 'idle', openEditorName: null },
                    reducers: {
                        updateResumeDataReducer: function (e, t) {
                            var n = JSON.parse(JSON.stringify(e.resumeData));
                            (n[t.payload.column].filter(function (e) {
                                return e.name === t.payload.name;
                            })[0].componentData = t.payload.data),
                                (e.resumeData = n);
                        },
                        updateOpenEditorName: function (e, t) {
                            console.log('calling updateOpenEditorName', t.payload), (e.openEditorName = t.payload);
                        },
                    },
                    extraReducers: function (e) {
                        e.addCase(te.fulfilled, function (e, t) {
                            console.log(t), (e.resumeData = t.payload);
                        }),
                            e.addCase(ne.fulfilled, function (e, t) {
                                e.resumeData = t.payload;
                            });
                    },
                }),
                ce = ae.actions,
                se = ce.updateResumeDataReducer,
                ie = ce.updateOpenEditorName,
                oe = ae.reducer,
                re = Object(x.b)(
                    'resume/getResumeSettingsByResumeId',
                    (function () {
                        var e = Object(ee.a)(
                            $.a.mark(function e(t, n) {
                                var a;
                                return $.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    w.firestore().collection('resumes').doc(''.concat(t)).get()
                                                );
                                            case 2:
                                                return (e.next = 4), e.sent.data();
                                            case 4:
                                                return (a = e.sent), e.abrupt('return', JSON.parse(a.resumeSettings));
                                            case 6:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                le = Object(x.b)(
                    'resume/updateResumeSettingsByResumeId',
                    (function () {
                        var e = Object(ee.a)(
                            $.a.mark(function e(t, n) {
                                return $.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    w
                                                        .firestore()
                                                        .collection('resumes')
                                                        .doc(''.concat(t.resumeId))
                                                        .update({ resumeSettings: JSON.stringify(t.data) })
                                                );
                                            case 2:
                                                return e.abrupt('return', t.data);
                                            case 3:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                de = Object(x.c)({
                    name: 'resumeSettingsSlice',
                    initialState: { resumeSettings: null },
                    reducers: {
                        updateSettingsDataReducer: function (e, t) {
                            var n = JSON.parse(JSON.stringify(t.payload));
                            e.resumeSettings = n;
                        },
                    },
                    extraReducers: function (e) {
                        e.addCase(re.fulfilled, function (e, t) {
                            e.resumeSettings = t.payload;
                        }),
                            e.addCase(le.fulfilled, function (e, t) {
                                e.resumeSettings = t.payload;
                            });
                    },
                }),
                me = de.actions.updateSettingsDataReducer,
                ue = de.reducer,
                je = {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, !1] }],
                        [{ align: [] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                        [{ color: [] }, { background: [] }],
                        ['link', 'image'],
                        ['clean'],
                    ],
                },
                be = {
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
                        sidebar: !0,
                        sidebarposition: 'right',
                    },
                    resumeJson: {
                        header: [
                            { name: 'BasicInfo', componentType: 'BasicInfo', path: 'BasicInfo/BasicInfo' },
                            {
                                name: 'ProfessionalSummary',
                                componentType: 'ProfessionalSummary',
                                path: 'ProfessionalSummary/ProfessionalSummary',
                                componentData: {
                                    title: 'Professional Summary',
                                    items: [{ summary: 'This is summary body.' }],
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
                                    showIcon: !0,
                                    items: [
                                        {
                                            title: 'Won Best Employee Award for last 2 consecutive year (2020 & 2021). Won Best Employee Award for last 2 consecutive year (2020 & 2021).',
                                        },
                                        { title: 'Won inter-zone cricket competition (2020). ' },
                                        { title: 'Runner up for state level table tennis competition (2020).' },
                                    ],
                                },
                            },
                            {
                                name: 'Experience',
                                componentType: 'Experience',
                                path: 'Experience/Experience',
                                componentData: {
                                    title: 'Experience',
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
                                    filled: !1,
                                    rounded: !0,
                                    items: [
                                        { title: 'HTML' },
                                        { title: 'CSS' },
                                        { title: 'JavaScript' },
                                        { title: 'React' },
                                    ],
                                },
                            },
                            {
                                name: 'Tools',
                                componentType: 'Skills',
                                path: 'Skills/Skills',
                                componentData: {
                                    title: 'Tools',
                                    filled: !1,
                                    rounded: !0,
                                    items: [{ title: 'Git' }, { title: 'Webpack' }, { title: 'Gulp' }],
                                },
                            },
                            {
                                name: 'Hobbies',
                                componentType: 'Skills',
                                path: 'Skills/Skills',
                                componentData: {
                                    title: 'Hobbies',
                                    filled: !1,
                                    rounded: !0,
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
                                        { socialPlatform: 'Github', username: '@username' },
                                        { socialPlatform: 'LinkedIn', username: '@username' },
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
                                    showProficiency: !0,
                                    showProficiencyProgress: !0,
                                    items: [
                                        { language: 'English', proficiency: 'Proficient' },
                                        { language: 'Hindi', proficiency: 'Native' },
                                        { language: 'Spanish', proficiency: 'Beginner' },
                                    ],
                                },
                            },
                            {
                                name: 'SkillsWithProgress',
                                componentType: 'SkillsWithProgress',
                                path: 'SkillsWithProgress/SkillsWithProgress',
                                componentData: {
                                    title: 'Skills',
                                    showProficiency: !0,
                                    showProficiencyProgress: !0,
                                    items: [
                                        { title: 'HTML', proficiency: 80 },
                                        { title: 'CSS', proficiency: 80 },
                                        { title: 'Javascript', proficiency: '70' },
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
                                            value: 'solid',
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
                                        {
                                            type: 'number',
                                            label: 'Height',
                                            rule: 'borderWidth',
                                            value: '1',
                                            unit: 'px',
                                        },
                                        {
                                            type: 'number',
                                            label: 'Space Above',
                                            rule: 'marginTop',
                                            value: '5',
                                            unit: 'px',
                                        },
                                        {
                                            type: 'number',
                                            label: 'Space Below',
                                            rule: 'marginBottom',
                                            value: '5',
                                            unit: 'px',
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                pe = [
                    '#000000',
                    '#ffffff',
                    '#483d8b',
                    '#f0f8ff',
                    '#2f4f4f',
                    '#bdb76b',
                    '#183141',
                    '#ffd700',
                    '#D9E2E9',
                    '#141428',
                    '#94AA9E',
                    '#B5282E',
                    '#808000',
                    '#191970',
                    '#FBECD7',
                    '#dc143c',
                ],
                Oe = [
                    { value: 'x-small', label: 'XS' },
                    { value: 'small', label: 'S' },
                    { value: 'medium', label: 'M' },
                    { value: 'large', label: 'L' },
                    { value: 'larger', label: 'XL' },
                ],
                ge = Object(x.b)(
                    'resume/getUserDataByUserId',
                    (function () {
                        var e = Object(ee.a)(
                            $.a.mark(function e(t, n) {
                                var a;
                                return $.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), w.firestore().collection('users').doc(t).get();
                                            case 2:
                                                return (e.next = 4), e.sent.data();
                                            case 4:
                                                return (a = e.sent), e.abrupt('return', a);
                                            case 6:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                he = Object(x.b)(
                    'resume/updateUserDataByUserId',
                    (function () {
                        var e = Object(ee.a)(
                            $.a.mark(function e(t, n) {
                                return $.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    w
                                                        .firestore()
                                                        .collection('users')
                                                        .doc(''.concat(t.userId))
                                                        .update({ userResumes: t.data })
                                                );
                                            case 2:
                                                return e.abrupt('return', t.data);
                                            case 3:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                fe = Object(x.b)(
                    'resume/deleteResumeByResumeId',
                    (function () {
                        var e = Object(ee.a)(
                            $.a.mark(function e(t, n) {
                                return $.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                w.firestore().collection('resumes').doc(''.concat(t)).delete();
                                            case 1:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                xe = Object(x.b)(
                    'resume/copyResumeByResumeId',
                    (function () {
                        var e = Object(ee.a)(
                            $.a.mark(function e(t, n) {
                                var a;
                                return $.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.next = 2),
                                                    w.firestore().collection('resumes').doc(t.resumeId).get()
                                                );
                                            case 2:
                                                return (e.next = 4), e.sent.data();
                                            case 4:
                                                return (
                                                    (a = e.sent),
                                                    (e.next = 7),
                                                    w
                                                        .firestore()
                                                        .collection('resumes')
                                                        .doc(''.concat(t.uniqueId))
                                                        .set({
                                                            resumeJson: a.resumeJson,
                                                            resumeSettings: a.resumeSettings,
                                                        })
                                                );
                                            case 7:
                                                return e.abrupt('return', JSON.parse(a.resumeJson));
                                            case 8:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                ve = Object(x.b)(
                    'resume/createNewReumseByUserId',
                    (function () {
                        var e = Object(ee.a)(
                            $.a.mark(function e(t, n) {
                                var a, c;
                                return $.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    console.log(t),
                                                    (a = [
                                                        {
                                                            resumeName: 'Resume '.concat(t.data.length + 1),
                                                            resumeId: ''.concat(t.uniqueId),
                                                            resumeImage: '',
                                                        },
                                                    ]),
                                                    (c = [].concat(Object(L.a)(t.data), a)),
                                                    (be.resumeJson.header.filter(function (e) {
                                                        return 'BasicInfo' === e.name;
                                                    })[0].componentData = {
                                                        fullName: t.userData.name,
                                                        email: t.userData.email,
                                                        website: 'www.example.com',
                                                        phone: '1234567890',
                                                        address: '123, ABC Street, XYZ City, ABC State, 123456',
                                                    }),
                                                    (e.next = 6),
                                                    w
                                                        .firestore()
                                                        .collection('resumes')
                                                        .doc(''.concat(t.uniqueId))
                                                        .set({
                                                            resumeJson: JSON.stringify(be.resumeJson),
                                                            resumeSettings: JSON.stringify(be.resumeSettings),
                                                        })
                                                );
                                            case 6:
                                                return (
                                                    (e.next = 8),
                                                    w
                                                        .firestore()
                                                        .collection('users')
                                                        .doc(t.userData.userId)
                                                        .update({ userResumes: JSON.stringify(c) })
                                                );
                                            case 8:
                                                return e.abrupt('return', c);
                                            case 9:
                                            case 'end':
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t, n) {
                            return e.apply(this, arguments);
                        };
                    })()
                ),
                ye = Object(x.c)({
                    name: 'userDataSlice',
                    initialState: { userData: null },
                    reducers: {
                        updateUserDataReducer: function (e, t) {
                            var n = JSON.parse(JSON.stringify(e.userData));
                            e.userData = n;
                        },
                    },
                    extraReducers: function (e) {
                        e.addCase(ge.fulfilled, function (e, t) {
                            e.userData = t.payload;
                        }),
                            e.addCase(ve.fulfilled, function (e, t) {
                                e.userData.userResumes = t.payload;
                            }),
                            e.addCase(he.fulfilled, function (e, t) {
                                e.userData.userResumes = t.payload;
                            });
                    },
                }),
                Ne = (ye.actions.updateUserDataReducer, ye.reducer),
                Ce = n(224),
                Se = n.n(Ce),
                ke = n(225),
                Ie = n.n(ke),
                we = n(96),
                De = n.n(we),
                Pe = n(227),
                Re = n.n(Pe),
                ze = n(130),
                Be = n.n(ze),
                Te = n(226),
                Ae = n.n(Te),
                Ee = n(108),
                Fe = n.n(Ee),
                Je = n(230),
                We = n.n(Je),
                He = n(229),
                Le = n.n(He),
                Ue = n(95),
                Me = n.n(Ue),
                Ge = n(75),
                qe = n.n(Ge),
                Ye = n(228),
                _e = n.n(Ye),
                Ve = n(207),
                Xe = n.n(Ve),
                Ke = (n(273), n(68)),
                Ze = n(212),
                Qe = n.n(Ze),
                $e = n(213),
                et = n.n($e),
                tt = n(214),
                nt = n.n(tt),
                at = (n(377), n(460)),
                ct = function (e) {
                    var t = Object(a.useState)({
                            headerFontColorToggle: !1,
                            headingFontColorToggle: !1,
                            subheadingFontColorToggle: !1,
                            bodyFontToggle: !1,
                            headerBackgroundColorToggle: !1,
                            sidebarBackgroundColorToogle: !1,
                            sidebarHeadingColorToggle: !1,
                            mainBackgroundColorToggle: !1,
                        }),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1],
                        i = function () {
                            e.openEditorSection();
                        },
                        o = function (e, t) {
                            document.querySelector(':root').style.setProperty(e, t);
                        },
                        r = function (t, n) {
                            e.setResumeSettings(
                                Object(U.a)(Object(U.a)({}, e.resumeSettings), {}, { headingAlignment: n })
                            );
                        },
                        l = function (e) {
                            s(Object(U.a)(Object(U.a)({}, c), {}, Object(H.a)({}, e, !c[e])));
                        },
                        d = function (t, n) {
                            e.setResumeSettings(
                                Object(U.a)(Object(U.a)({}, e.resumeSettings), {}, { sidebarPosition: n })
                            );
                        };
                    return Object(D.jsxs)('div', {
                        className: 'resume-setting-wrap',
                        children: [
                            Object(D.jsxs)('div', {
                                className: 'resume-setting-section-header',
                                children: [
                                    Object(D.jsx)(j.a, {
                                        size: 'small',
                                        variant: 'contained',
                                        onClick: function () {
                                            e.updateGlobalSetting(e.resumeSettings), i();
                                        },
                                        children: 'Save Changes',
                                    }),
                                    Object(D.jsx)(j.a, {
                                        size: 'small',
                                        variant: 'outlined',
                                        onClick: i,
                                        children: 'Close',
                                    }),
                                ],
                            }),
                            Object(D.jsxs)('div', {
                                className: 'resume-setting-section',
                                children: [
                                    Object(D.jsx)('div', {
                                        className: 'resume-setting-heading',
                                        children: Object(D.jsx)('span', { children: 'Resume Header Section' }),
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsxs)('span', {
                                                className: 'resume-setting-item-label',
                                                children: [
                                                    'Font Color',
                                                    Object(D.jsx)(at.a, {
                                                        className: 'resume-setting-selected-color',
                                                        onClick: function () {
                                                            l('headerFontColorToggle');
                                                        },
                                                        sx: { backgroundColor: e.resumeSettings.aboutSectionFontColor },
                                                    }),
                                                ],
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'resume-setting-item-body '.concat(
                                                    !0 === c.headerFontColorToggle ? '' : 'd-none'
                                                ),
                                                children: Object(D.jsx)(Ke.a, {
                                                    color: e.resumeSettings.aboutSectionFontColor,
                                                    onChangeComplete: function (t) {
                                                        e.setResumeSettings(
                                                            Object(U.a)(
                                                                Object(U.a)({}, e.resumeSettings),
                                                                {},
                                                                { aboutSectionFontColor: t.hex }
                                                            )
                                                        ),
                                                            l('headerFontColorToggle'),
                                                            o('--color-font-about-section', t.hex);
                                                    },
                                                    colors: pe,
                                                    triangle: 'hide',
                                                }),
                                            }),
                                        ],
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsxs)('span', {
                                                className: 'resume-setting-item-label',
                                                children: [
                                                    'Background Color',
                                                    Object(D.jsx)(at.a, {
                                                        className: 'resume-setting-selected-color',
                                                        onClick: function () {
                                                            l('headerBackgroundColorToggle');
                                                        },
                                                        sx: { backgroundColor: e.resumeSettings.headerBackgroundColor },
                                                    }),
                                                ],
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'resume-setting-item-body '.concat(
                                                    !0 === c.headerBackgroundColorToggle ? '' : 'd-none'
                                                ),
                                                children: Object(D.jsx)(Ke.a, {
                                                    color: e.resumeSettings.headerBackgroundColor,
                                                    onChangeComplete: function (t) {
                                                        e.setResumeSettings(
                                                            Object(U.a)(
                                                                Object(U.a)({}, e.resumeSettings),
                                                                {},
                                                                { headerBackgroundColor: t.hex }
                                                            )
                                                        ),
                                                            l('headerBackgroundColorToggle');
                                                    },
                                                    colors: pe,
                                                    triangle: 'hide',
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(D.jsxs)('div', {
                                className: 'resume-setting-section',
                                children: [
                                    Object(D.jsx)('div', {
                                        className: 'resume-setting-heading',
                                        children: Object(D.jsx)('span', { children: 'Resume Main Section' }),
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsxs)('span', {
                                                className: 'resume-setting-item-label',
                                                children: [
                                                    'Heading Font Color',
                                                    Object(D.jsx)(at.a, {
                                                        className: 'resume-setting-selected-color',
                                                        onClick: function () {
                                                            l('headingFontColorToggle');
                                                        },
                                                        sx: { backgroundColor: e.resumeSettings.headingFontColor },
                                                    }),
                                                ],
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'resume-setting-item-body '.concat(
                                                    !0 === c.headingFontColorToggle ? '' : 'd-none'
                                                ),
                                                children: Object(D.jsx)(Ke.a, {
                                                    color: e.resumeSettings.headingFontColor,
                                                    onChangeComplete: function (t) {
                                                        e.setResumeSettings(
                                                            Object(U.a)(
                                                                Object(U.a)({}, e.resumeSettings),
                                                                {},
                                                                { headingFontColor: t.hex }
                                                            )
                                                        ),
                                                            o('--color-font-heading', t.hex),
                                                            l('headingFontColorToggle');
                                                    },
                                                    colors: pe,
                                                    triangle: 'hide',
                                                }),
                                            }),
                                        ],
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsxs)('span', {
                                                className: 'resume-setting-item-label',
                                                children: [
                                                    'Body Font Color',
                                                    Object(D.jsx)(at.a, {
                                                        className: 'resume-setting-selected-color',
                                                        onClick: function () {
                                                            l('bodyFontColorToggle');
                                                        },
                                                        sx: { backgroundColor: e.resumeSettings.bodyFontColor },
                                                    }),
                                                ],
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'resume-setting-item-body '.concat(
                                                    !0 === c.bodyFontColorToggle ? '' : 'd-none'
                                                ),
                                                children: Object(D.jsx)(Ke.a, {
                                                    color: e.resumeSettings.bodyFontColor,
                                                    onChangeComplete: function (t) {
                                                        e.setResumeSettings(
                                                            Object(U.a)(
                                                                Object(U.a)({}, e.resumeSettings),
                                                                {},
                                                                { bodyFontColor: t.hex }
                                                            )
                                                        ),
                                                            o('--color-font-body', t.hex),
                                                            l('bodyFontColorToggle');
                                                    },
                                                    colors: pe,
                                                    triangle: 'hide',
                                                }),
                                            }),
                                        ],
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsxs)('span', {
                                                className: 'resume-setting-item-label',
                                                children: [
                                                    'Background Color',
                                                    Object(D.jsx)(at.a, {
                                                        className: 'resume-setting-selected-color',
                                                        onClick: function () {
                                                            l('mainBackgroundColorToggle');
                                                        },
                                                        sx: { backgroundColor: e.resumeSettings.mainBackgroundColor },
                                                    }),
                                                ],
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'resume-setting-item-body '.concat(
                                                    !0 === c.mainBackgroundColorToggle ? '' : 'd-none'
                                                ),
                                                children: Object(D.jsx)(Ke.a, {
                                                    color: e.resumeSettings.mainBackgroundColor,
                                                    onChangeComplete: function (t) {
                                                        e.setResumeSettings(
                                                            Object(U.a)(
                                                                Object(U.a)({}, e.resumeSettings),
                                                                {},
                                                                { mainBackgroundColor: t.hex }
                                                            )
                                                        ),
                                                            l('mainBackgroundColorToggle');
                                                    },
                                                    colors: pe,
                                                    triangle: 'hide',
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(D.jsxs)('div', {
                                className: 'resume-setting-section',
                                children: [
                                    Object(D.jsx)('div', {
                                        className: 'resume-setting-heading',
                                        children: Object(D.jsx)('span', { children: 'Resume Sidebar Section' }),
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsxs)('span', {
                                                className: 'resume-setting-item-label',
                                                children: [
                                                    'Heading Font Color',
                                                    Object(D.jsx)(at.a, {
                                                        className: 'resume-setting-selected-color',
                                                        onClick: function () {
                                                            l('sidebarHeadingColorToggle');
                                                        },
                                                        sx: { backgroundColor: e.resumeSettings.sidebarHeadingColor },
                                                    }),
                                                ],
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'resume-setting-item-body '.concat(
                                                    !0 === c.sidebarHeadingColorToggle ? '' : 'd-none'
                                                ),
                                                children: Object(D.jsx)(Ke.a, {
                                                    color: e.resumeSettings.sidebarHeadingColor,
                                                    onChangeComplete: function (t) {
                                                        e.setResumeSettings(
                                                            Object(U.a)(
                                                                Object(U.a)({}, e.resumeSettings),
                                                                {},
                                                                { sidebarHeadingColor: t.hex }
                                                            )
                                                        ),
                                                            o('--color-sidebar-heading', t.hex),
                                                            l('sidebarHeadingColorToggle');
                                                    },
                                                    colors: pe,
                                                    triangle: 'hide',
                                                }),
                                            }),
                                        ],
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsxs)('span', {
                                                className: 'resume-setting-item-label',
                                                children: [
                                                    'Body Font Color',
                                                    Object(D.jsx)(at.a, {
                                                        className: 'resume-setting-selected-color',
                                                        onClick: function () {
                                                            l('sidebarBodyColorToggle');
                                                        },
                                                        sx: { backgroundColor: e.resumeSettings.sidebarBodyColor },
                                                    }),
                                                ],
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'resume-setting-item-body '.concat(
                                                    !0 === c.sidebarBodyColorToggle ? '' : 'd-none'
                                                ),
                                                children: Object(D.jsx)(Ke.a, {
                                                    color: e.resumeSettings.sidebarBodyColor,
                                                    onChangeComplete: function (t) {
                                                        e.setResumeSettings(
                                                            Object(U.a)(
                                                                Object(U.a)({}, e.resumeSettings),
                                                                {},
                                                                { sidebarBodyColor: t.hex }
                                                            )
                                                        ),
                                                            o('--color-sidebar-body', t.hex),
                                                            l('sidebarBodyColorToggle');
                                                    },
                                                    colors: pe,
                                                    triangle: 'hide',
                                                }),
                                            }),
                                        ],
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsxs)('span', {
                                                className: 'resume-setting-item-label',
                                                children: [
                                                    'Background Color',
                                                    Object(D.jsx)(at.a, {
                                                        className: 'resume-setting-selected-color',
                                                        onClick: function () {
                                                            l('sidebarBackgroundColorToggle');
                                                        },
                                                        sx: {
                                                            backgroundColor: e.resumeSettings.sidebarBackgroundColor,
                                                        },
                                                    }),
                                                ],
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'resume-setting-item-body '.concat(
                                                    !0 === c.sidebarBackgroundColorToggle ? '' : 'd-none'
                                                ),
                                                children: Object(D.jsx)(Ke.a, {
                                                    color: e.resumeSettings.sidebarBackgroundColor,
                                                    onChangeComplete: function (t) {
                                                        e.setResumeSettings(
                                                            Object(U.a)(
                                                                Object(U.a)({}, e.resumeSettings),
                                                                {},
                                                                { sidebarBackgroundColor: t.hex }
                                                            )
                                                        ),
                                                            l('sidebarBackgroundColorToggle');
                                                    },
                                                    colors: pe,
                                                    triangle: 'hide',
                                                }),
                                            }),
                                        ],
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsx)('span', {
                                                className: 'resume-setting-item-label',
                                                children: 'Sidebar Position',
                                            }),
                                            Object(D.jsxs)('div', {
                                                className: 'resume-setting-item-body',
                                                children: [
                                                    Object(D.jsx)('div', {
                                                        className: 'font-size-div '.concat(
                                                            'left' === e.resumeSettings.sidebarPosition ? 'active' : ''
                                                        ),
                                                        onClick: function (e) {
                                                            return d(0, 'left');
                                                        },
                                                        children: 'Left',
                                                    }),
                                                    Object(D.jsx)('div', {
                                                        className: 'font-size-div '.concat(
                                                            'right' === e.resumeSettings.sidebarPosition ? 'active' : ''
                                                        ),
                                                        onClick: function (e) {
                                                            return d(0, 'right');
                                                        },
                                                        children: 'Right',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(D.jsxs)('div', {
                                className: 'resume-setting-section',
                                children: [
                                    Object(D.jsx)('div', {
                                        className: 'resume-setting-heading',
                                        children: Object(D.jsx)('span', { children: 'Font Sizes' }),
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsx)('span', {
                                                className: 'resume-setting-item-label',
                                                children: 'Heading Font Size',
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'resume-setting-item-body',
                                                children: Oe.map(function (t, n) {
                                                    return Object(D.jsx)(
                                                        'div',
                                                        {
                                                            className: 'font-size-div '.concat(
                                                                e.resumeSettings.headingFontSize === t.value
                                                                    ? 'active'
                                                                    : ''
                                                            ),
                                                            onClick: function (n) {
                                                                return (
                                                                    (a = t.value),
                                                                    void e.setResumeSettings(
                                                                        Object(U.a)(
                                                                            Object(U.a)({}, e.resumeSettings),
                                                                            {},
                                                                            { headingFontSize: a }
                                                                        )
                                                                    )
                                                                );
                                                                var a;
                                                            },
                                                            children: t.label,
                                                        },
                                                        n
                                                    );
                                                }),
                                            }),
                                        ],
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsx)('span', {
                                                className: 'resume-setting-item-label',
                                                children: 'SubHeading Font Size',
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'resume-setting-item-body',
                                                children: Oe.map(function (t, n) {
                                                    return Object(D.jsx)(
                                                        'div',
                                                        {
                                                            className: 'font-size-div '.concat(
                                                                e.resumeSettings.subheadingFontSize === t.value
                                                                    ? 'active'
                                                                    : ''
                                                            ),
                                                            onClick: function (n) {
                                                                return (
                                                                    (a = t.value),
                                                                    void e.setResumeSettings(
                                                                        Object(U.a)(
                                                                            Object(U.a)({}, e.resumeSettings),
                                                                            {},
                                                                            { subheadingFontSize: a }
                                                                        )
                                                                    )
                                                                );
                                                                var a;
                                                            },
                                                            children: t.label,
                                                        },
                                                        n
                                                    );
                                                }),
                                            }),
                                        ],
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsx)('span', {
                                                className: 'resume-setting-item-label',
                                                children: 'Body Font Size',
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'resume-setting-item-body',
                                                children: Oe.map(function (t, n) {
                                                    return Object(D.jsx)(
                                                        'div',
                                                        {
                                                            className: 'font-size-div '.concat(
                                                                e.resumeSettings.bodyFontSize === t.value
                                                                    ? 'active'
                                                                    : ''
                                                            ),
                                                            onClick: function (n) {
                                                                return (
                                                                    (a = t.value),
                                                                    void e.setResumeSettings(
                                                                        Object(U.a)(
                                                                            Object(U.a)({}, e.resumeSettings),
                                                                            {},
                                                                            { bodyFontSize: a }
                                                                        )
                                                                    )
                                                                );
                                                                var a;
                                                            },
                                                            children: t.label,
                                                        },
                                                        n
                                                    );
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(D.jsxs)('div', {
                                className: 'resume-setting-section',
                                children: [
                                    Object(D.jsx)('div', {
                                        className: 'resume-setting-heading',
                                        children: Object(D.jsx)('span', { children: 'Heading Styles' }),
                                    }),
                                    Object(D.jsxs)('div', {
                                        className: 'resume-setting-item',
                                        children: [
                                            Object(D.jsx)('span', {
                                                className: 'resume-setting-item-label',
                                                children: 'Heading Alignment',
                                            }),
                                            Object(D.jsxs)('div', {
                                                className: 'resume-setting-item-body',
                                                children: [
                                                    Object(D.jsx)('div', {
                                                        className: 'heading-alignment-div '.concat(
                                                            'left' === e.resumeSettings.headingAlignment ? 'active' : ''
                                                        ),
                                                        onClick: function (e) {
                                                            return r(0, 'left');
                                                        },
                                                        children: Object(D.jsx)(Qe.a, {}),
                                                    }),
                                                    Object(D.jsx)('div', {
                                                        className: 'heading-alignment-div '.concat(
                                                            'center' === e.resumeSettings.headingAlignment
                                                                ? 'active'
                                                                : ''
                                                        ),
                                                        onClick: function (e) {
                                                            return r(0, 'center');
                                                        },
                                                        children: Object(D.jsx)(et.a, {}),
                                                    }),
                                                    Object(D.jsx)('div', {
                                                        className: 'heading-alignment-div '.concat(
                                                            'right' === e.resumeSettings.headingAlignment
                                                                ? 'active'
                                                                : ''
                                                        ),
                                                        onClick: function (e) {
                                                            return r(0, 'right');
                                                        },
                                                        children: Object(D.jsx)(nt.a, {}),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                st = c.a.memo(ct),
                it = (n(155), n(215)),
                ot = n.n(it),
                rt = n(35),
                lt = n.n(rt),
                dt = n(476),
                mt = n(50),
                ut = n.n(mt),
                jt = n(51),
                bt = n.n(jt),
                pt = function (e) {
                    var t = Object(a.useState)(e.editorData),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1],
                        o = Object(l.c)(),
                        r = function (t, n) {
                            var a = Object(U.a)(Object(U.a)({}, c), {}, Object(H.a)({}, t, n));
                            s(a), e.setWidgetData(a);
                        },
                        d = function () {
                            o(ie(null)), e.setOpen(!1);
                        };
                    return i.a.createPortal(
                        Object(D.jsxs)('div', {
                            className: 'editor-wrap',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'editor-section-header',
                                    children: [
                                        Object(D.jsx)(j.a, {
                                            variant: 'contained',
                                            size: 'small',
                                            onClick: function (t) {
                                                var n = Object(U.a)({}, c);
                                                o(se({ name: e.componentName, column: e.componentColumn, data: n })),
                                                    d(),
                                                    console.log(c);
                                            },
                                            disabled: !c.items.filter(function (e) {
                                                return e.title.length > 0;
                                            }).length,
                                            children: 'Save Changes',
                                        }),
                                        Object(D.jsx)(j.a, {
                                            variant: 'outlined',
                                            size: 'small',
                                            onClick: d,
                                            children: 'Close',
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-heading-wrap',
                                    children: Object(D.jsx)(X.a, {
                                        label: 'Title',
                                        fullWidth: !0,
                                        autoComplete: 'off',
                                        onChange: function (e) {
                                            var t = e.target.value;
                                            r('title', t);
                                        },
                                        value: c.title,
                                        variant: 'standard',
                                    }),
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-options-wrap',
                                    children: Object(D.jsxs)('div', {
                                        children: [
                                            'Show Icon: ',
                                            Object(D.jsx)(dt.a, {
                                                label: 'Rounded',
                                                onChange: function (e) {
                                                    r('showIcon', e.target.checked);
                                                },
                                                checked: c.showIcon,
                                            }),
                                        ],
                                    }),
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-items-wrap',
                                    children: c.items.map(function (e, t) {
                                        return Object(D.jsxs)(
                                            'div',
                                            {
                                                className: 'editor-item',
                                                children: [
                                                    Object(D.jsx)(X.a, {
                                                        label: 'Option ' + (t + 1),
                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                        onChange: function (e) {
                                                            return (function (e, t) {
                                                                var n = Object(L.a)(c.items);
                                                                (n[t] = { title: e.target.value }), r('items', n);
                                                            })(e, t);
                                                        },
                                                        value: e.title,
                                                        'data-key': t,
                                                        multiline: !0,
                                                        rows: 2,
                                                        inputProps: { style: { fontSize: 14, lineHeight: 1.2 } },
                                                        style: { width: 380 },
                                                    }),
                                                    Object(D.jsx)(ut.a, {
                                                        onClick: function (e) {
                                                            return (function (e, t) {
                                                                var n = Object(L.a)(c.items);
                                                                n.splice(t + 1, 0, { title: '' }), r('items', n);
                                                            })(0, t);
                                                        },
                                                        className: 'add-item-icon',
                                                    }),
                                                    Object(D.jsx)(bt.a, {
                                                        onClick: function (e) {
                                                            return (function (e, t) {
                                                                var n = Object(L.a)(c.items);
                                                                n.splice(t, 1), r('items', n);
                                                            })(0, t);
                                                        },
                                                        className: 'delete-item-icon '.concat(0 === t ? 'd-none' : ''),
                                                    }),
                                                ],
                                            },
                                            t
                                        );
                                    }),
                                }),
                            ],
                        }),
                        document.getElementById('editorPortal')
                    );
                },
                Ot =
                    (n(379),
                    function (e) {
                        var t = Object(a.useState)(!1),
                            n = Object(M.a)(t, 2),
                            c = n[0],
                            s = n[1];
                        console.log('calling achievment', c);
                        var i = Object(a.useState)(e.componentItem.componentData),
                            o = Object(M.a)(i, 2),
                            r = o[0],
                            d = o[1],
                            m = Object(l.c)(),
                            u = Object(l.d)(function (e) {
                                return e.resumeDataReducer.openEditorName;
                            });
                        return Object(D.jsxs)('div', {
                            className: 'resume-section resume-section-achievement',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'resume-section-title',
                                    children: [
                                        Object(D.jsx)('span', { children: r.title }),
                                        Object(D.jsx)('span', {
                                            className: 'edit-component-icon',
                                            children: Object(D.jsx)(lt.a, {
                                                titleAccess: 'Edit',
                                                onClick: function () {
                                                    m(ie(e.componentItem.name)), s(!0);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'achievement-item-wrap',
                                    children: r.items.map(function (e, t) {
                                        return Object(D.jsxs)(
                                            'div',
                                            {
                                                className: 'achievement-item',
                                                children: [
                                                    Object(D.jsx)('span', {
                                                        className: 'achievement-icon '.concat(
                                                            r.showIcon ? '' : 'd-none'
                                                        ),
                                                        children: Object(D.jsx)(ot.a, {}),
                                                    }),
                                                    Object(D.jsx)('span', {
                                                        className: 'achievement-summary',
                                                        children: e.title,
                                                    }),
                                                ],
                                            },
                                            'achievement-'.concat(t)
                                        );
                                    }),
                                }),
                                u === e.componentItem.name
                                    ? Object(D.jsx)(pt, {
                                          setWidgetData: d,
                                          open: c,
                                          setOpen: s,
                                          componentColumn: e.componentColumn,
                                          componentName: e.componentItem.name,
                                          editorData: r,
                                      })
                                    : null,
                            ],
                        });
                    }),
                gt = c.a.memo(Ot),
                ht = n(9),
                ft = n(216),
                xt = n.n(ft),
                vt = n(217),
                yt = n.n(vt),
                Nt = n(218),
                Ct = n.n(Nt),
                St = n(219),
                kt = n.n(St),
                It = n(480),
                wt = n(485),
                Dt = n(486),
                Pt = function (e) {
                    var t = Object(a.useState)(e.editorData),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1],
                        i = Object(a.useState)(!1),
                        o = Object(M.a)(i, 2),
                        r = o[0],
                        d = o[1],
                        m = Object(l.c)(),
                        u = function (e, t) {
                            var n = e.target.value,
                                a = Object(U.a)({}, c);
                            (a = Object(U.a)(Object(U.a)({}, a), {}, Object(H.a)({}, t, n))), s(a);
                        },
                        b = function () {
                            e.setOpen(!1);
                        };
                    return (
                        Object(a.useEffect)(
                            function () {
                                r && (m(se({ name: e.componentName, column: e.componentColumn, data: c })), d(!0));
                            },
                            [c]
                        ),
                        Object(D.jsxs)(It.a, {
                            maxWidth: 'sm',
                            fullWidth: !0,
                            open: e.open,
                            onClose: b,
                            children: [
                                Object(D.jsx)(Dt.a, {
                                    children: Object(D.jsxs)('div', {
                                        className: 'editor-wrap',
                                        children: [
                                            Object(D.jsx)('div', {
                                                className: 'editor-heading-wrap',
                                                children: Object(D.jsx)(X.a, {
                                                    fullWidth: !0,
                                                    readOnly: !0,
                                                    autoComplete: 'off',
                                                    value: 'Basic Info',
                                                    variant: 'standard',
                                                }),
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'editor-items-wrap',
                                                children: Object(D.jsx)('div', {
                                                    className: 'editor-item',
                                                    children: Object(D.jsxs)('div', {
                                                        children: [
                                                            Object(D.jsx)('div', {
                                                                children: Object(D.jsx)(X.a, {
                                                                    label: 'Full Name',
                                                                    sx: { mb: 1, mt: 1, mr: 1 },
                                                                    onChange: function (e) {
                                                                        return u(e, 'fullName');
                                                                    },
                                                                    value: c.fullName,
                                                                    inputProps: { style: { fontSize: 14, width: 240 } },
                                                                    size: 'small',
                                                                }),
                                                            }),
                                                            Object(D.jsx)('div', {
                                                                children: Object(D.jsx)(X.a, {
                                                                    label: 'Current Role/Designation',
                                                                    sx: { mb: 1, mt: 1, mr: 1 },
                                                                    onChange: function (e) {
                                                                        return u(e, 'currentRole');
                                                                    },
                                                                    value: c.currentRole,
                                                                    inputProps: { style: { fontSize: 14, width: 240 } },
                                                                    size: 'small',
                                                                }),
                                                            }),
                                                            Object(D.jsx)('div', {
                                                                children: Object(D.jsx)(X.a, {
                                                                    label: 'Email',
                                                                    sx: { mb: 1, mt: 1, mr: 1 },
                                                                    onChange: function (e) {
                                                                        return u(e, 'email');
                                                                    },
                                                                    value: c.email,
                                                                    inputProps: { style: { fontSize: 14, width: 240 } },
                                                                    size: 'small',
                                                                }),
                                                            }),
                                                            Object(D.jsx)('div', {
                                                                children: Object(D.jsx)(X.a, {
                                                                    label: 'Phone',
                                                                    sx: { mb: 1, mt: 1, mr: 1 },
                                                                    onChange: function (e) {
                                                                        return u(e, 'phone');
                                                                    },
                                                                    value: c.phone,
                                                                    inputProps: { style: { fontSize: 14, width: 240 } },
                                                                    size: 'small',
                                                                }),
                                                            }),
                                                            Object(D.jsx)('div', {
                                                                children: Object(D.jsx)(X.a, {
                                                                    label: 'Website',
                                                                    sx: { mb: 1, mt: 1, mr: 1 },
                                                                    onChange: function (e) {
                                                                        return u(e, 'website');
                                                                    },
                                                                    value: c.website,
                                                                    inputProps: { style: { fontSize: 14, width: 240 } },
                                                                    size: 'small',
                                                                }),
                                                            }),
                                                            Object(D.jsx)('div', {
                                                                children: Object(D.jsx)(X.a, {
                                                                    label: 'Address',
                                                                    sx: { mb: 1, mt: 1, mr: 1 },
                                                                    onChange: function (e) {
                                                                        return u(e, 'address');
                                                                    },
                                                                    value: c.address,
                                                                    inputProps: { style: { fontSize: 14, width: 240 } },
                                                                    size: 'small',
                                                                    multiline: !0,
                                                                    rows: 3,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                Object(D.jsxs)(wt.a, {
                                    children: [
                                        Object(D.jsx)(j.a, { onClick: b, children: 'Cancel' }),
                                        Object(D.jsx)(j.a, {
                                            onClick: function (e) {
                                                s(Object(U.a)({}, c)), d(!0), b();
                                            },
                                            children: 'Save',
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                Rt =
                    (n(380),
                    Object(ht.a)(d.a)(function (e) {
                        var t = e.theme;
                        return Object(U.a)(
                            Object(U.a)({}, t.typography.caption),
                            {},
                            { textAlign: 'left', display: 'flex', alignItems: 'center' }
                        );
                    })),
                zt = function (e) {
                    var t = Object(a.useState)(!1),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1];
                    return Object(D.jsxs)('div', {
                        className: 'resume-section resume-section-basic-info',
                        children: [
                            Object(D.jsxs)('div', {
                                className: 'basic-section-title',
                                children: [
                                    Object(D.jsx)('span', {
                                        className: 'basic-info name',
                                        children: e.componentItem.componentData.fullName,
                                    }),
                                    Object(D.jsx)('span', {
                                        className: 'edit-component-icon',
                                        children: Object(D.jsx)(lt.a, {
                                            onClick: function () {
                                                s(!0);
                                            },
                                        }),
                                    }),
                                ],
                            }),
                            Object(D.jsx)('p', {
                                className: 'basic-info current-role',
                                children: e.componentItem.componentData.currentRole,
                            }),
                            Object(D.jsx)('div', {
                                children: Object(D.jsxs)(Y.a, {
                                    mt: 1,
                                    container: !0,
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    rowSpacing: 0.5,
                                    columnSpacing: { xs: 0.5, sm: 0.5, md: 0.5 },
                                    children: [
                                        Object(D.jsx)(Y.a, {
                                            item: !0,
                                            xs: 6,
                                            children: Object(D.jsxs)(Rt, {
                                                children: [
                                                    Object(D.jsx)(xt.a, { fontSize: '15' }),
                                                    Object(D.jsx)(d.a, {
                                                        component: 'span',
                                                        sx: { pl: 1 },
                                                        children: e.componentItem.componentData.phone,
                                                    }),
                                                ],
                                            }),
                                        }),
                                        Object(D.jsx)(Y.a, {
                                            item: !0,
                                            xs: 6,
                                            children: Object(D.jsxs)(Rt, {
                                                children: [
                                                    Object(D.jsx)(yt.a, { fontSize: '15' }),
                                                    Object(D.jsx)(d.a, {
                                                        component: 'span',
                                                        sx: { pl: 1 },
                                                        children: e.componentItem.componentData.email,
                                                    }),
                                                ],
                                            }),
                                        }),
                                        Object(D.jsx)(Y.a, {
                                            item: !0,
                                            xs: 6,
                                            children: Object(D.jsxs)(Rt, {
                                                children: [
                                                    Object(D.jsx)(Ct.a, { fontSize: '15' }),
                                                    Object(D.jsx)(d.a, {
                                                        component: 'span',
                                                        sx: { pl: 1 },
                                                        children: e.componentItem.componentData.website,
                                                    }),
                                                ],
                                            }),
                                        }),
                                        Object(D.jsx)(Y.a, {
                                            item: !0,
                                            xs: 6,
                                            children: Object(D.jsxs)(Rt, {
                                                children: [
                                                    Object(D.jsx)(kt.a, { fontSize: '15' }),
                                                    Object(D.jsx)(d.a, {
                                                        component: 'span',
                                                        sx: { pl: 1 },
                                                        children: e.componentItem.componentData.address,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            Object(D.jsx)(Pt, {
                                open: c,
                                setOpen: s,
                                componentColumn: e.componentColumn,
                                componentName: e.componentItem.name,
                                editorData: e.componentItem.componentData,
                            }),
                        ],
                    });
                },
                Bt = c.a.memo(zt),
                Tt = n(127),
                At = n.n(Tt),
                Et = n(221),
                Ft = n.n(Et),
                Jt = n(468),
                Wt = function (e) {
                    var t = Object(a.useState)(e.editorData),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1],
                        o = Object(l.c)(),
                        r = function (t, n) {
                            var a = Object(U.a)(Object(U.a)({}, c), {}, Object(H.a)({}, t, n));
                            s(a), e.setWidgetData(a);
                        },
                        m = function () {
                            o(ie(null)), e.setOpen(!1);
                        };
                    return i.a.createPortal(
                        Object(D.jsxs)('div', {
                            className: 'editor-wrap',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'editor-section-header',
                                    children: [
                                        Object(D.jsx)(j.a, {
                                            variant: 'contained',
                                            size: 'small',
                                            onClick: function (t) {
                                                var n = Object(U.a)(
                                                    Object(U.a)({}, c),
                                                    {},
                                                    {
                                                        items: c.items.filter(function (e, t) {
                                                            return e.title.length > 0;
                                                        }),
                                                    }
                                                );
                                                o(se({ name: e.componentName, column: e.componentColumn, data: n })),
                                                    m(),
                                                    console.log(c);
                                            },
                                            disabled: !c.items.filter(function (e) {
                                                return e.title.length > 0;
                                            }).length,
                                            children: 'Save Changes',
                                        }),
                                        Object(D.jsx)(j.a, {
                                            variant: 'outlined',
                                            size: 'small',
                                            onClick: m,
                                            children: 'Close',
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-heading-wrap',
                                    children: Object(D.jsx)(X.a, {
                                        label: 'Title',
                                        fullWidth: !0,
                                        autoComplete: 'off',
                                        onChange: function (e) {
                                            var t = e.target.value;
                                            r('title', t);
                                        },
                                        value: c.title,
                                        variant: 'standard',
                                    }),
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-items-wrap',
                                    children: c.items.map(function (e, t) {
                                        return Object(D.jsxs)(
                                            'div',
                                            {
                                                children: [
                                                    Object(D.jsxs)('div', {
                                                        className: 'editor-item',
                                                        children: [
                                                            Object(D.jsxs)('div', {
                                                                children: [
                                                                    Object(D.jsx)(X.a, {
                                                                        label: 'Degree & Field of Study',
                                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                                        onChange: function (e) {
                                                                            return (function (e, t) {
                                                                                var n = e.target.value,
                                                                                    a = Object(L.a)(c.items);
                                                                                (a[t] = Object(U.a)(
                                                                                    Object(U.a)({}, a[t]),
                                                                                    {},
                                                                                    { title: n }
                                                                                )),
                                                                                    r('items', a);
                                                                            })(e, t);
                                                                        },
                                                                        value: e.title,
                                                                        'data-key': t,
                                                                        inputProps: { style: { fontSize: 14 } },
                                                                        size: 'small',
                                                                    }),
                                                                    Object(D.jsx)(X.a, {
                                                                        label: 'University or School',
                                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                                        onChange: function (e) {
                                                                            return (function (e, t) {
                                                                                var n = e.target.value,
                                                                                    a = Object(L.a)(c.items);
                                                                                (a[t] = Object(U.a)(
                                                                                    Object(U.a)({}, a[t]),
                                                                                    {},
                                                                                    { university: n }
                                                                                )),
                                                                                    r('items', a);
                                                                            })(e, t);
                                                                        },
                                                                        value: e.university,
                                                                        'data-key': t,
                                                                        inputProps: { style: { fontSize: 14 } },
                                                                        size: 'small',
                                                                    }),
                                                                    Object(D.jsx)(X.a, {
                                                                        label: 'Date (From - To)',
                                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                                        onChange: function (e) {
                                                                            return (function (e, t) {
                                                                                var n = e.target.value,
                                                                                    a = Object(L.a)(c.items);
                                                                                (a[t] = Object(U.a)(
                                                                                    Object(U.a)({}, a[t]),
                                                                                    {},
                                                                                    { date: n }
                                                                                )),
                                                                                    r('items', a);
                                                                            })(e, t);
                                                                        },
                                                                        value: e.date,
                                                                        'data-key': t,
                                                                        placeholder: 'YYYY - YYYY',
                                                                        inputProps: { style: { fontSize: 14 } },
                                                                        size: 'small',
                                                                    }),
                                                                    Object(D.jsx)(X.a, {
                                                                        label: 'Percentage or CGPA',
                                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                                        onChange: function (e) {
                                                                            return (function (e, t) {
                                                                                var n = e.target.value,
                                                                                    a = Object(L.a)(c.items);
                                                                                (a[t] = Object(U.a)(
                                                                                    Object(U.a)({}, a[t]),
                                                                                    {},
                                                                                    { gpa: n }
                                                                                )),
                                                                                    r('items', a);
                                                                            })(e, t);
                                                                        },
                                                                        value: e.gpa,
                                                                        'data-key': t,
                                                                        inputProps: { style: { fontSize: 14 } },
                                                                        size: 'small',
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(D.jsx)(ut.a, {
                                                                onClick: function (e) {
                                                                    return (function (e, t) {
                                                                        var n = Object(L.a)(c.items);
                                                                        n.splice(t + 1, 0, {
                                                                            title: '',
                                                                            university: '',
                                                                            date: '',
                                                                            gpa: '',
                                                                        }),
                                                                            r('items', n);
                                                                    })(0, t);
                                                                },
                                                                className: 'add-item-icon',
                                                            }),
                                                            Object(D.jsx)(bt.a, {
                                                                onClick: function (e) {
                                                                    return (function (e, t) {
                                                                        var n = Object(L.a)(c.items);
                                                                        n.splice(t, 1), r('items', n);
                                                                    })(0, t);
                                                                },
                                                                className: 'delete-item-icon '.concat(
                                                                    0 === t ? 'd-none' : ''
                                                                ),
                                                            }),
                                                        ],
                                                    }),
                                                    Object(D.jsx)(d.a, { sx: { height: 20 } }),
                                                    Object(D.jsx)(Jt.a, {}),
                                                    Object(D.jsx)(d.a, { sx: { height: 20 } }),
                                                ],
                                            },
                                            t
                                        );
                                    }),
                                }),
                            ],
                        }),
                        document.getElementById('editorPortal')
                    );
                },
                Ht =
                    (n(381),
                    function (e) {
                        var t = Object(a.useState)(!1),
                            n = Object(M.a)(t, 2),
                            c = n[0],
                            s = n[1];
                        console.log('calling education', c);
                        var i = Object(a.useState)(e.componentItem.componentData),
                            o = Object(M.a)(i, 2),
                            r = o[0],
                            d = o[1],
                            m = Object(l.c)(),
                            u = Object(l.d)(function (e) {
                                return e.resumeDataReducer.openEditorName;
                            });
                        return Object(D.jsxs)('div', {
                            className: 'resume-section resume-section-education',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'resume-section-title',
                                    children: [
                                        Object(D.jsx)('span', { children: r.title }),
                                        Object(D.jsx)('span', {
                                            className: 'edit-component-icon',
                                            children: Object(D.jsx)(lt.a, {
                                                titleAccess: 'Edit',
                                                onClick: function () {
                                                    m(ie(e.componentItem.name)), s(!0);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'education-item-wrap',
                                    children: r.items.map(function (e, t) {
                                        return Object(D.jsxs)(
                                            'div',
                                            {
                                                className: 'education-item',
                                                children: [
                                                    Object(D.jsxs)('div', {
                                                        className: 'resume-section-subtitle',
                                                        children: [
                                                            Object(D.jsx)('span', {
                                                                className: 'education-title full-width-field',
                                                                children: e.title,
                                                            }),
                                                            Object(D.jsx)('span', {
                                                                className: 'education-university full-width-field',
                                                                children: e.university,
                                                            }),
                                                        ],
                                                    }),
                                                    Object(D.jsxs)('div', {
                                                        className: 'section-meta',
                                                        children: [
                                                            e.date &&
                                                                Object(D.jsxs)('div', {
                                                                    className: 'section-meta-item',
                                                                    children: [
                                                                        Object(D.jsx)(At.a, {
                                                                            className:
                                                                                'section-meta-icon resume-section-body',
                                                                        }),
                                                                        Object(D.jsx)('div', {
                                                                            className: 'resume-section-body',
                                                                            component: 'span',
                                                                            sx: { pl: 0.8 },
                                                                            children: e.date,
                                                                        }),
                                                                    ],
                                                                }),
                                                            e.gpa &&
                                                                Object(D.jsxs)('div', {
                                                                    className: 'section-meta-item',
                                                                    children: [
                                                                        Object(D.jsx)(Ft.a, {
                                                                            className:
                                                                                'section-meta-icon resume-section-body',
                                                                        }),
                                                                        Object(D.jsx)('div', {
                                                                            className: 'resume-section-body',
                                                                            component: 'span',
                                                                            sx: { pl: 0.8 },
                                                                            children: e.gpa,
                                                                        }),
                                                                    ],
                                                                }),
                                                        ],
                                                    }),
                                                ],
                                            },
                                            t
                                        );
                                    }),
                                }),
                                u === e.componentItem.name
                                    ? Object(D.jsx)(Wt, {
                                          setWidgetData: d,
                                          open: c,
                                          setOpen: s,
                                          componentColumn: e.componentColumn,
                                          componentName: e.componentItem.name,
                                          editorData: r,
                                      })
                                    : null,
                            ],
                        });
                    }),
                Lt = c.a.memo(Ht),
                Ut = n(223),
                Mt = n.n(Ut),
                Gt = n(222),
                qt = n.n(Gt),
                Yt = (n(382), n(128)),
                _t = n.n(Yt),
                Vt = function (e) {
                    var t = Object(a.useState)(e.editorData),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1],
                        o = Object(l.c)(),
                        r = function (t, n) {
                            var a = Object(U.a)(Object(U.a)({}, c), {}, Object(H.a)({}, t, n));
                            s(a), e.setWidgetData(a);
                        },
                        m = function (e, t, n) {
                            var a = e.target.value,
                                s = Object(L.a)(c.items);
                            (s[t] = Object(U.a)(Object(U.a)({}, s[t]), {}, Object(H.a)({}, n, a))), r('items', s);
                        },
                        u = function () {
                            o(ie(null)), e.setOpen(!1);
                        };
                    return i.a.createPortal(
                        Object(D.jsxs)('div', {
                            className: 'editor-wrap',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'editor-section-header',
                                    children: [
                                        Object(D.jsx)(j.a, {
                                            variant: 'contained',
                                            size: 'small',
                                            onClick: function (t) {
                                                var n = Object(U.a)(
                                                    Object(U.a)({}, c),
                                                    {},
                                                    {
                                                        items: c.items.filter(function (e, t) {
                                                            return e.experienceTitle.length > 0;
                                                        }),
                                                    }
                                                );
                                                o(se({ name: e.componentName, column: e.componentColumn, data: n })),
                                                    u(),
                                                    console.log(c);
                                            },
                                            disabled: !c.items.filter(function (e) {
                                                return e.experienceTitle.length > 0;
                                            }).length,
                                            children: 'Save Changes',
                                        }),
                                        Object(D.jsx)(j.a, {
                                            variant: 'outlined',
                                            size: 'small',
                                            onClick: u,
                                            children: 'Close',
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-heading-wrap',
                                    children: Object(D.jsx)(X.a, {
                                        fullWidth: !0,
                                        label: 'Title',
                                        autoComplete: 'off',
                                        onChange: function (e) {
                                            var t = e.target.value;
                                            r('title', t);
                                        },
                                        value: c.title,
                                        variant: 'standard',
                                    }),
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-items-wrap',
                                    children: c.items.map(function (e, t) {
                                        return Object(D.jsxs)(
                                            'div',
                                            {
                                                children: [
                                                    Object(D.jsxs)('div', {
                                                        className: 'editor-item',
                                                        children: [
                                                            Object(D.jsxs)('div', {
                                                                children: [
                                                                    Object(D.jsx)(X.a, {
                                                                        label: 'Job Role',
                                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                                        onChange: function (e) {
                                                                            return m(e, t, 'experienceTitle');
                                                                        },
                                                                        value: e.experienceTitle,
                                                                        inputProps: { style: { fontSize: 14 } },
                                                                        size: 'small',
                                                                    }),
                                                                    Object(D.jsx)(X.a, {
                                                                        label: 'Company',
                                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                                        onChange: function (e) {
                                                                            return m(e, t, 'company');
                                                                        },
                                                                        value: e.company,
                                                                        inputProps: { style: { fontSize: 14 } },
                                                                        size: 'small',
                                                                    }),
                                                                    Object(D.jsx)(X.a, {
                                                                        label: 'Date (From - To)',
                                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                                        onChange: function (e) {
                                                                            return m(e, t, 'date');
                                                                        },
                                                                        value: e.date,
                                                                        inputProps: { style: { fontSize: 14 } },
                                                                        size: 'small',
                                                                    }),
                                                                    Object(D.jsx)(X.a, {
                                                                        label: 'location',
                                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                                        onChange: function (e) {
                                                                            return m(e, t, 'location');
                                                                        },
                                                                        value: e.location,
                                                                        inputProps: { style: { fontSize: 14 } },
                                                                        size: 'small',
                                                                    }),
                                                                    Object(D.jsx)(_t.a, {
                                                                        defaultValue: e.experienceSummary,
                                                                        modules: je,
                                                                        theme: 'snow',
                                                                        onChange: function (e) {
                                                                            return (function (e, t) {
                                                                                var n = Object(L.a)(c.items);
                                                                                (n[t] = Object(U.a)(
                                                                                    Object(U.a)({}, n[t]),
                                                                                    {},
                                                                                    { experienceSummary: e }
                                                                                )),
                                                                                    r('items', n);
                                                                            })(e, t);
                                                                        },
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(D.jsx)(ut.a, {
                                                                onClick: function (e) {
                                                                    return (function (e, t) {
                                                                        var n = Object(L.a)(c.items);
                                                                        n.splice(t + 1, 0, {
                                                                            experienceTitle: '',
                                                                            company: '',
                                                                            date: '',
                                                                            location: '',
                                                                            experienceSummary: '',
                                                                        }),
                                                                            r('items', n);
                                                                    })(0, t);
                                                                },
                                                                className: 'add-item-icon',
                                                            }),
                                                            Object(D.jsx)(bt.a, {
                                                                onClick: function (e) {
                                                                    return (function (e, t) {
                                                                        var n = Object(L.a)(c.items);
                                                                        n.splice(t, 1), r('items', n);
                                                                    })(0, t);
                                                                },
                                                                className: 'delete-item-icon '.concat(
                                                                    0 === t ? 'd-none' : ''
                                                                ),
                                                            }),
                                                        ],
                                                    }),
                                                    Object(D.jsx)(d.a, { sx: { height: 20 } }),
                                                    Object(D.jsx)(Jt.a, {}),
                                                    Object(D.jsx)(d.a, { sx: { height: 20 } }),
                                                ],
                                            },
                                            t
                                        );
                                    }),
                                }),
                            ],
                        }),
                        document.getElementById('editorPortal')
                    );
                },
                Xt = function (e) {
                    var t = Object(a.useState)(!1),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1];
                    console.log('calling experience', c);
                    var i = Object(a.useState)(e.componentItem.componentData),
                        o = Object(M.a)(i, 2),
                        r = o[0],
                        m = o[1],
                        u = Object(l.c)(),
                        j = Object(l.d)(function (e) {
                            return e.resumeDataReducer.openEditorName;
                        });
                    return Object(D.jsxs)('div', {
                        className: 'resume-section resume-section-experience',
                        children: [
                            Object(D.jsxs)('div', {
                                className: 'resume-section-title',
                                children: [
                                    Object(D.jsx)('span', { children: r.title }),
                                    Object(D.jsx)('span', {
                                        className: 'edit-component-icon',
                                        children: Object(D.jsx)(lt.a, {
                                            titleAccess: 'Edit',
                                            onClick: function () {
                                                u(ie(e.componentItem.name)), s(!0);
                                            },
                                        }),
                                    }),
                                ],
                            }),
                            Object(D.jsx)('div', {
                                className: 'experience-item-wrap',
                                children: r.items.map(function (e, t) {
                                    return Object(D.jsxs)(
                                        'div',
                                        {
                                            className: 'experience-item',
                                            children: [
                                                Object(D.jsx)('span', {
                                                    className:
                                                        'experience-title full-width-field resume-section-subtitle',
                                                    children: e.experienceTitle,
                                                }),
                                                Object(D.jsxs)('div', {
                                                    className: 'section-meta',
                                                    children: [
                                                        e.company &&
                                                            Object(D.jsxs)('div', {
                                                                className: 'section-meta-item',
                                                                children: [
                                                                    Object(D.jsx)(qt.a, { fontSize: '15' }),
                                                                    Object(D.jsx)(d.a, {
                                                                        component: 'span',
                                                                        sx: { pl: 1 },
                                                                        children: e.company,
                                                                    }),
                                                                ],
                                                            }),
                                                        e.date &&
                                                            Object(D.jsxs)('div', {
                                                                className: 'section-meta-item',
                                                                children: [
                                                                    Object(D.jsx)(At.a, { fontSize: '15' }),
                                                                    Object(D.jsx)(d.a, {
                                                                        component: 'span',
                                                                        sx: { pl: 1 },
                                                                        children: e.date,
                                                                    }),
                                                                ],
                                                            }),
                                                        e.location &&
                                                            Object(D.jsxs)('div', {
                                                                className: 'section-meta-item',
                                                                children: [
                                                                    Object(D.jsx)(Mt.a, { fontSize: '15' }),
                                                                    Object(D.jsx)(d.a, {
                                                                        component: 'span',
                                                                        sx: { pl: 1 },
                                                                        children: e.location,
                                                                    }),
                                                                ],
                                                            }),
                                                    ],
                                                }),
                                                Object(D.jsx)('div', {
                                                    className: 'experience-summary rich-text-div',
                                                    dangerouslySetInnerHTML: { __html: e.experienceSummary },
                                                }),
                                            ],
                                        },
                                        t
                                    );
                                }),
                            }),
                            j === e.componentItem.name
                                ? Object(D.jsx)(Vt, {
                                      setWidgetData: m,
                                      open: c,
                                      setOpen: s,
                                      componentColumn: e.componentColumn,
                                      componentName: e.componentItem.name,
                                      editorData: r,
                                  })
                                : null,
                        ],
                    });
                },
                Kt = c.a.memo(Xt),
                Zt = n(473),
                Qt = function (e) {
                    var t = Object(a.useState)(e.editorData),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1],
                        o = Object(l.c)(),
                        r = function (t, n) {
                            var a = Object(U.a)(Object(U.a)({}, c), {}, Object(H.a)({}, t, n));
                            s(a), e.setWidgetData(a);
                        },
                        d = function () {
                            o(ie(null)), e.setOpen(!1);
                        },
                        m = function (e) {
                            var t = 25;
                            switch (e) {
                                default:
                                    t = 25;
                                    break;
                                case 'Intermediate':
                                    t = 50;
                                    break;
                                case 'Proficient':
                                    t = 75;
                                    break;
                                case 'Native':
                                    t = 100;
                            }
                            return t;
                        };
                    return i.a.createPortal(
                        Object(D.jsxs)('div', {
                            className: 'editor-wrap',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'editor-section-header',
                                    children: [
                                        Object(D.jsx)(j.a, {
                                            variant: 'contained',
                                            size: 'small',
                                            onClick: function (t) {
                                                var n = Object(U.a)({}, c);
                                                o(se({ name: e.componentName, column: e.componentColumn, data: n })),
                                                    d();
                                            },
                                            disabled: !c.items.filter(function (e) {
                                                return e.language.length > 0;
                                            }).length,
                                            children: 'Save Changes',
                                        }),
                                        Object(D.jsx)(j.a, {
                                            variant: 'outlined',
                                            size: 'small',
                                            onClick: d,
                                            children: 'Close',
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-heading-wrap',
                                    children: Object(D.jsx)(X.a, {
                                        label: 'Title',
                                        fullWidth: !0,
                                        autoComplete: 'off',
                                        onChange: function (e) {
                                            var t = e.target.value;
                                            r('title', t);
                                        },
                                        value: c.title,
                                        variant: 'standard',
                                    }),
                                }),
                                Object(D.jsxs)('div', {
                                    className: 'editor-options-wrap',
                                    children: [
                                        Object(D.jsxs)('div', {
                                            children: [
                                                'Show Proficiency: ',
                                                Object(D.jsx)(dt.a, {
                                                    label: 'Proficiency',
                                                    onChange: function (e) {
                                                        return (function (e) {
                                                            r('showProficiency', e.target.checked);
                                                        })(e);
                                                    },
                                                    checked: c.showProficiency,
                                                }),
                                            ],
                                        }),
                                        Object(D.jsxs)('div', {
                                            children: [
                                                'Show Proficiency Progress: ',
                                                Object(D.jsx)(dt.a, {
                                                    label: 'Proficiency Progress',
                                                    onChange: function (e) {
                                                        return (function (e) {
                                                            r('showProficiencyProgress', e.target.checked);
                                                        })(e);
                                                    },
                                                    checked: c.showProficiencyProgress,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-items-wrap',
                                    children: c.items.map(function (e, t) {
                                        return Object(D.jsxs)(
                                            'div',
                                            {
                                                className: 'editor-item',
                                                children: [
                                                    Object(D.jsx)(X.a, {
                                                        label: 'Option ' + (t + 1),
                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                        onChange: function (e) {
                                                            return (function (e, t) {
                                                                var n = Object(L.a)(c.items);
                                                                (n[t] = {
                                                                    language: e.target.value,
                                                                    proficiency: 'Beginner',
                                                                }),
                                                                    r('items', n);
                                                            })(e, t);
                                                        },
                                                        value: e.language,
                                                        'data-key': t,
                                                        size: 'small',
                                                    }),
                                                    Object(D.jsxs)('div', {
                                                        className: 'progress-wrap',
                                                        children: [
                                                            e.proficiency,
                                                            Object(D.jsx)(Zt.a, {
                                                                'aria-label': 'Proficiency',
                                                                value: m(e.proficiency),
                                                                step: 25,
                                                                marks: !0,
                                                                min: 25,
                                                                max: 100,
                                                                onChange: function (e) {
                                                                    return (function (e, t) {
                                                                        var n = Object(L.a)(c.items);
                                                                        switch (e.target.value) {
                                                                            default:
                                                                                n[t] = {
                                                                                    language: n[t].language,
                                                                                    proficiency: 'Beginner',
                                                                                };
                                                                                break;
                                                                            case 50:
                                                                                n[t] = {
                                                                                    language: n[t].language,
                                                                                    proficiency: 'Intermediate',
                                                                                };
                                                                                break;
                                                                            case 75:
                                                                                n[t] = {
                                                                                    language: n[t].language,
                                                                                    proficiency: 'Proficient',
                                                                                };
                                                                                break;
                                                                            case 100:
                                                                                n[t] = {
                                                                                    language: n[t].language,
                                                                                    proficiency: 'Native',
                                                                                };
                                                                        }
                                                                        r('items', n);
                                                                    })(e, t);
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                    Object(D.jsx)(ut.a, {
                                                        onClick: function (e) {
                                                            return (function (e, t) {
                                                                var n = Object(L.a)(c.items);
                                                                n.splice(t + 1, 0, { language: '' }), r('items', n);
                                                            })(0, t);
                                                        },
                                                        className: 'add-item-icon',
                                                    }),
                                                    Object(D.jsx)(bt.a, {
                                                        onClick: function (e) {
                                                            return (function (e, t) {
                                                                var n = Object(L.a)(c.items);
                                                                n.splice(t, 1), r('items', n);
                                                            })(0, t);
                                                        },
                                                        className: 'delete-item-icon '.concat(0 === t ? 'd-none' : ''),
                                                    }),
                                                ],
                                            },
                                            t
                                        );
                                    }),
                                }),
                            ],
                        }),
                        document.getElementById('editorPortal')
                    );
                },
                $t =
                    (n(403),
                    function (e) {
                        var t = Object(a.useState)(!1),
                            n = Object(M.a)(t, 2),
                            c = n[0],
                            s = n[1];
                        console.log('calling languages', c);
                        var i = Object(a.useState)(e.componentItem.componentData),
                            o = Object(M.a)(i, 2),
                            r = o[0],
                            d = o[1],
                            m = Object(l.c)(),
                            u = Object(l.d)(function (e) {
                                return e.resumeDataReducer.openEditorName;
                            }),
                            j = function (e) {
                                var t = 25;
                                switch (e) {
                                    default:
                                        t = 25;
                                        break;
                                    case 'Intermediate':
                                        t = 50;
                                        break;
                                    case 'Proficient':
                                        t = 75;
                                        break;
                                    case 'Native':
                                        t = 100;
                                }
                                return t;
                            };
                        return Object(D.jsxs)('div', {
                            className: 'resume-section resume-section-language',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'resume-section-title',
                                    children: [
                                        Object(D.jsx)('span', { children: r.title }),
                                        Object(D.jsx)('span', {
                                            className: 'edit-component-icon',
                                            children: Object(D.jsx)(lt.a, {
                                                onClick: function () {
                                                    m(ie(e.componentItem.name)), s(!0);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                r.items.map(function (e, t) {
                                    return Object(D.jsxs)(
                                        'div',
                                        {
                                            className: 'language-wrapper',
                                            children: [
                                                Object(D.jsxs)('div', {
                                                    className: 'language-header',
                                                    children: [
                                                        Object(D.jsx)('div', {
                                                            className: 'language-title',
                                                            children: e.language,
                                                        }),
                                                        Object(D.jsxs)('div', {
                                                            className: 'language-level '.concat(
                                                                r.showProficiency ? '' : 'd-none'
                                                            ),
                                                            children: [' - ', e.proficiency],
                                                        }),
                                                    ],
                                                }),
                                                Object(D.jsx)('div', {
                                                    className: 'language-progress',
                                                    children: Object(D.jsx)(K.a, {
                                                        className: r.showProficiencyProgress ? '' : 'd-none',
                                                        variant: 'determinate',
                                                        value: j(e.proficiency),
                                                    }),
                                                }),
                                            ],
                                        },
                                        t
                                    );
                                }),
                                u === e.componentItem.name
                                    ? Object(D.jsx)(Qt, {
                                          setWidgetData: d,
                                          open: c,
                                          setOpen: s,
                                          componentColumn: e.componentColumn,
                                          componentName: e.componentItem.name,
                                          editorData: r,
                                      })
                                    : null,
                            ],
                        });
                    }),
                en = c.a.memo($t),
                tn = function (e) {
                    var t = Object(a.useState)(e.editorData),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1],
                        o = Object(l.c)(),
                        r = function (t, n) {
                            var a = Object(U.a)(Object(U.a)({}, c), {}, Object(H.a)({}, t, n));
                            s(a), e.setWidgetData(a);
                        },
                        m = function () {
                            o(ie(null)), e.setOpen(!1);
                        };
                    return i.a.createPortal(
                        Object(D.jsxs)('div', {
                            className: 'editor-wrap',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'editor-section-header',
                                    children: [
                                        Object(D.jsx)(j.a, {
                                            variant: 'contained',
                                            size: 'small',
                                            onClick: function (t) {
                                                var n = Object(U.a)({}, c);
                                                o(se({ name: e.componentName, column: e.componentColumn, data: n })),
                                                    m(),
                                                    console.log(c);
                                            },
                                            disabled: !c.items.filter(function (e) {
                                                return e.summary.length > 0;
                                            }).length,
                                            children: 'Save Changes',
                                        }),
                                        Object(D.jsx)(j.a, {
                                            variant: 'outlined',
                                            size: 'small',
                                            onClick: m,
                                            children: 'Close',
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-heading-wrap',
                                    children: Object(D.jsx)(X.a, {
                                        fullWidth: !0,
                                        label: 'Title',
                                        autoComplete: 'off',
                                        onChange: function (e) {
                                            var t = e.target.value;
                                            r('title', t);
                                        },
                                        value: c.title,
                                        variant: 'standard',
                                    }),
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-items-wrap',
                                    children: c.items.map(function (e, t) {
                                        return Object(D.jsxs)(
                                            'div',
                                            {
                                                children: [
                                                    Object(D.jsx)('div', {
                                                        className: 'editor-item',
                                                        children: Object(D.jsx)('div', {
                                                            children: Object(D.jsx)(_t.a, {
                                                                defaultValue: e.summary,
                                                                modules: je,
                                                                theme: 'snow',
                                                                onChange: function (e) {
                                                                    return (function (e, t, n) {
                                                                        var a = e,
                                                                            s = Object(L.a)(c.items);
                                                                        (s[t] = Object(U.a)(
                                                                            Object(U.a)({}, s[t]),
                                                                            {},
                                                                            Object(H.a)({}, n, a)
                                                                        )),
                                                                            r('items', s);
                                                                    })(e, t, 'summary');
                                                                },
                                                            }),
                                                        }),
                                                    }),
                                                    Object(D.jsx)(d.a, { sx: { height: 20 } }),
                                                    Object(D.jsx)(Jt.a, {}),
                                                    Object(D.jsx)(d.a, { sx: { height: 20 } }),
                                                ],
                                            },
                                            t
                                        );
                                    }),
                                }),
                            ],
                        }),
                        document.getElementById('editorPortal')
                    );
                },
                nn =
                    (n(404),
                    function (e) {
                        var t = Object(a.useState)(!1),
                            n = Object(M.a)(t, 2),
                            c = n[0],
                            s = n[1];
                        console.log('calling ProfessionalSummary', c);
                        var i = Object(a.useState)(e.componentItem.componentData),
                            o = Object(M.a)(i, 2),
                            r = o[0],
                            d = o[1],
                            m = Object(l.c)(),
                            u = Object(l.d)(function (e) {
                                return e.resumeDataReducer.openEditorName;
                            });
                        return Object(D.jsxs)('div', {
                            className: 'resume-section resume-section-professional-summary',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'resume-section-title',
                                    children: [
                                        Object(D.jsx)('span', { children: r.title }),
                                        Object(D.jsx)('span', {
                                            className: 'edit-component-icon',
                                            children: Object(D.jsx)(lt.a, {
                                                onClick: function () {
                                                    m(ie(e.componentItem.name)), s(!0);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'professional-summary-item-wrap',
                                    children: r.items.map(function (e, t) {
                                        return Object(D.jsx)(
                                            'div',
                                            {
                                                className: 'professional-summary-item',
                                                children: Object(D.jsx)('span', {
                                                    className: 'professional-summary-summary-body rich-text-div',
                                                    dangerouslySetInnerHTML: { __html: e.summary },
                                                }),
                                            },
                                            t
                                        );
                                    }),
                                }),
                                u === e.componentItem.name
                                    ? Object(D.jsx)(tn, {
                                          setWidgetData: d,
                                          open: c,
                                          setOpen: s,
                                          componentColumn: e.componentColumn,
                                          componentName: e.componentItem.name,
                                          editorData: r,
                                      })
                                    : null,
                            ],
                        });
                    }),
                an = c.a.memo(nn),
                cn = n(482),
                sn = function (e) {
                    var t = Object(a.useState)(e.editorData),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1],
                        o = Object(l.c)(),
                        r = function (t, n) {
                            var a = Object(U.a)(Object(U.a)({}, c), {}, Object(H.a)({}, t, n));
                            s(a), e.setWidgetData(a);
                        },
                        d = function () {
                            o(ie(null)), e.setOpen(!1);
                        };
                    return i.a.createPortal(
                        Object(D.jsxs)('div', {
                            className: 'editor-wrap',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'editor-section-header',
                                    children: [
                                        Object(D.jsx)(j.a, {
                                            variant: 'contained',
                                            size: 'small',
                                            onClick: function (t) {
                                                var n = Object(U.a)({}, c);
                                                s(n),
                                                    o(
                                                        se({
                                                            name: e.componentName,
                                                            column: e.componentColumn,
                                                            data: n,
                                                        })
                                                    ),
                                                    d(),
                                                    console.log(c);
                                            },
                                            disabled: !c.items.filter(function (e) {
                                                return e.title.length > 0;
                                            }).length,
                                            children: 'Save Changes',
                                        }),
                                        Object(D.jsx)(j.a, {
                                            variant: 'outlined',
                                            size: 'small',
                                            onClick: d,
                                            children: 'Close',
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-heading-wrap',
                                    children: Object(D.jsx)(X.a, {
                                        label: 'Title',
                                        fullWidth: !0,
                                        autoComplete: 'off',
                                        onChange: function (e) {
                                            var t = e.target.value;
                                            r('title', t);
                                        },
                                        value: c.title,
                                        variant: 'standard',
                                    }),
                                }),
                                Object(D.jsxs)('div', {
                                    className: 'editor-options-wrap',
                                    children: [
                                        Object(D.jsxs)('div', {
                                            children: [
                                                'Rounded: ',
                                                Object(D.jsx)(dt.a, {
                                                    label: 'Rounded',
                                                    onChange: function (e) {
                                                        r('rounded', e.target.checked);
                                                    },
                                                    checked: c.rounded,
                                                }),
                                            ],
                                        }),
                                        Object(D.jsxs)('div', {
                                            children: [
                                                'Filled: ',
                                                Object(D.jsx)(dt.a, {
                                                    label: 'Filled',
                                                    onChange: function (e) {
                                                        r('filled', e.target.checked);
                                                    },
                                                    checked: c.filled,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-items-wrap',
                                    children: c.items.map(function (e, t) {
                                        return Object(D.jsxs)(
                                            'div',
                                            {
                                                className: 'editor-item',
                                                children: [
                                                    Object(D.jsx)(X.a, {
                                                        label: 'Option ' + (t + 1),
                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                        onChange: function (e) {
                                                            return (function (e, t) {
                                                                var n = Object(L.a)(c.items);
                                                                (n[t] = { title: e.target.value }), r('items', n);
                                                            })(e, t);
                                                        },
                                                        value: e.title,
                                                        'data-key': t,
                                                        size: 'small',
                                                    }),
                                                    Object(D.jsx)(ut.a, {
                                                        onClick: function (e) {
                                                            return (function (e, t) {
                                                                var n = Object(L.a)(c.items);
                                                                n.splice(t + 1, 0, { title: '' }), r('items', n);
                                                            })(0, t);
                                                        },
                                                        className: 'add-item-icon',
                                                    }),
                                                    Object(D.jsx)(bt.a, {
                                                        onClick: function (e) {
                                                            return (function (e, t) {
                                                                var n = Object(L.a)(c.items);
                                                                n.splice(t, 1), r('items', n);
                                                            })(0, t);
                                                        },
                                                        className: 'delete-item-icon '.concat(0 === t ? 'd-none' : ''),
                                                    }),
                                                ],
                                            },
                                            t
                                        );
                                    }),
                                }),
                            ],
                        }),
                        document.getElementById('editorPortal')
                    );
                },
                on =
                    (n(405),
                    function (e) {
                        var t = Object(a.useState)(!1),
                            n = Object(M.a)(t, 2),
                            c = n[0],
                            s = n[1],
                            i = Object(a.useState)(e.componentItem.componentData),
                            o = Object(M.a)(i, 2),
                            r = o[0],
                            d = o[1],
                            m = Object(l.c)();
                        console.log('calling skills', c);
                        var u = Object(l.d)(function (e) {
                            return e.resumeDataReducer.openEditorName;
                        });
                        return Object(D.jsxs)('div', {
                            className: 'resume-section resume-section-skills',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'resume-section-title',
                                    children: [
                                        Object(D.jsx)('span', { children: r.title }),
                                        Object(D.jsx)('span', {
                                            className: 'edit-component-icon',
                                            children: Object(D.jsx)(lt.a, {
                                                titleAccess: 'Edit',
                                                onClick: function () {
                                                    m(ie(e.componentItem.name)), s(!0);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'skills-item-wrap',
                                    children: r.items.map(function (e, t) {
                                        return Object(D.jsx)(
                                            cn.a,
                                            {
                                                label: e.title,
                                                className: 'resume-section-body skills-chip '.concat(
                                                    r.rounded ? '' : 'no-rounded'
                                                ),
                                                variant: r.filled ? 'filled' : 'outlined',
                                            },
                                            t
                                        );
                                    }),
                                }),
                                u === e.componentItem.name
                                    ? Object(D.jsx)(sn, {
                                          setWidgetData: d,
                                          open: c,
                                          setOpen: s,
                                          componentColumn: e.componentColumn,
                                          componentName: e.componentItem.name,
                                          editorData: r,
                                      })
                                    : null,
                            ],
                        });
                    }),
                rn = c.a.memo(on),
                ln = function (e) {
                    var t = Object(a.useState)(e.editorData),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1],
                        i = Object(a.useState)(!1),
                        o = Object(M.a)(i, 2),
                        r = o[0],
                        d = o[1],
                        m = Object(a.useState)(c.title),
                        u = Object(M.a)(m, 2),
                        b = u[0],
                        p = u[1],
                        O = Object(a.useState)(c.items),
                        g = Object(M.a)(O, 2),
                        h = g[0],
                        f = g[1],
                        x = Object(a.useState)(c.showProficiency),
                        v = Object(M.a)(x, 2),
                        y = v[0],
                        N = v[1],
                        C = Object(a.useState)(c.showProficiencyProgress),
                        S = Object(M.a)(C, 2),
                        k = S[0],
                        I = S[1],
                        w = Object(l.c)(),
                        P = function () {
                            e.setOpen(!1);
                        };
                    return (
                        Object(a.useEffect)(
                            function () {
                                r && (w(se({ name: e.componentName, column: e.componentColumn, data: c })), d(!0));
                            },
                            [c]
                        ),
                        Object(D.jsxs)(It.a, {
                            maxWidth: 'sm',
                            fullWidth: !0,
                            open: e.open,
                            onClose: P,
                            children: [
                                Object(D.jsx)(Dt.a, {
                                    children: Object(D.jsxs)('div', {
                                        className: 'editor-wrap',
                                        children: [
                                            Object(D.jsx)('div', {
                                                className: 'editor-heading-wrap',
                                                children: Object(D.jsx)(X.a, {
                                                    fullWidth: !0,
                                                    autoComplete: 'off',
                                                    onChange: function (e) {
                                                        var t = e.target.value;
                                                        p(t);
                                                    },
                                                    value: b,
                                                    variant: 'standard',
                                                }),
                                            }),
                                            Object(D.jsxs)('div', {
                                                className: 'editor-options-wrap',
                                                children: [
                                                    Object(D.jsxs)('div', {
                                                        children: [
                                                            'Show Proficiency: ',
                                                            Object(D.jsx)(dt.a, {
                                                                label: 'Proficiency',
                                                                onChange: function (e) {
                                                                    return (function (e) {
                                                                        N(e.target.checked);
                                                                    })(e);
                                                                },
                                                                checked: y,
                                                            }),
                                                        ],
                                                    }),
                                                    Object(D.jsxs)('div', {
                                                        children: [
                                                            'Show Proficiency Progress: ',
                                                            Object(D.jsx)(dt.a, {
                                                                label: 'Proficiency Progress',
                                                                onChange: function (e) {
                                                                    return (function (e) {
                                                                        I(e.target.checked);
                                                                    })(e);
                                                                },
                                                                checked: k,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            Object(D.jsx)('div', {
                                                className: 'editor-items-wrap',
                                                children: h.map(function (e, t) {
                                                    return Object(D.jsxs)(
                                                        'div',
                                                        {
                                                            className: 'editor-item',
                                                            children: [
                                                                Object(D.jsx)(X.a, {
                                                                    label: 'Option ' + (t + 1),
                                                                    sx: { mb: 1, mt: 1, mr: 1 },
                                                                    onChange: function (e) {
                                                                        return (function (e, t) {
                                                                            var n = Object(L.a)(h);
                                                                            (n[t] = {
                                                                                title: e.target.value,
                                                                                proficiency: 0,
                                                                            }),
                                                                                f(n);
                                                                        })(e, t);
                                                                    },
                                                                    value: e.title,
                                                                    'data-key': t,
                                                                    size: 'small',
                                                                }),
                                                                Object(D.jsxs)('div', {
                                                                    className: 'progress-wrap',
                                                                    children: [
                                                                        e.proficiency,
                                                                        Object(D.jsx)(Zt.a, {
                                                                            'aria-label': 'Proficiency',
                                                                            value: Number(e.proficiency),
                                                                            step: 10,
                                                                            marks: !0,
                                                                            min: 0,
                                                                            max: 100,
                                                                            onChange: function (e) {
                                                                                return (function (e, t) {
                                                                                    var n = Object(L.a)(h);
                                                                                    (n[t] = {
                                                                                        title: n[t].title,
                                                                                        proficiency: e.target.value,
                                                                                    }),
                                                                                        f(n);
                                                                                })(e, t);
                                                                            },
                                                                        }),
                                                                    ],
                                                                }),
                                                                Object(D.jsx)(ut.a, {
                                                                    onClick: function (e) {
                                                                        return (function (e, t) {
                                                                            var n = Object(L.a)(h);
                                                                            n.splice(t + 1, 0, {
                                                                                title: '',
                                                                                proficiency: 0,
                                                                            }),
                                                                                f(n);
                                                                        })(0, t);
                                                                    },
                                                                    className: 'add-item-icon',
                                                                }),
                                                                Object(D.jsx)(bt.a, {
                                                                    onClick: function (e) {
                                                                        return (function (e, t) {
                                                                            var n = Object(L.a)(h);
                                                                            n.splice(t, 1), f(n);
                                                                        })(0, t);
                                                                    },
                                                                    className: 'delete-item-icon '.concat(
                                                                        0 === t ? 'd-none' : ''
                                                                    ),
                                                                }),
                                                            ],
                                                        },
                                                        t
                                                    );
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                Object(D.jsxs)(wt.a, {
                                    children: [
                                        Object(D.jsx)(j.a, { onClick: P, children: 'Cancel' }),
                                        Object(D.jsx)(j.a, {
                                            onClick: function (e) {
                                                s(
                                                    Object(U.a)(
                                                        Object(U.a)({}, c),
                                                        {},
                                                        {
                                                            title: b,
                                                            showProficiency: y,
                                                            showProficiencyProgress: k,
                                                            items: h.filter(function (e, t) {
                                                                return e.title.length > 0;
                                                            }),
                                                        }
                                                    )
                                                ),
                                                    d(!0),
                                                    P();
                                            },
                                            disabled: !h.filter(function (e) {
                                                return e.title.length > 0;
                                            }).length,
                                            children: 'Save',
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                dn =
                    (n(406),
                    function (e) {
                        var t = Object(a.useState)(!1),
                            n = Object(M.a)(t, 2),
                            c = n[0],
                            s = n[1];
                        console.log('calling SkillsWith Progress Bar', c);
                        return Object(D.jsxs)('div', {
                            className: 'resume-section resume-section-language',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'resume-section-title',
                                    children: [
                                        Object(D.jsx)('span', { children: e.componentItem.componentData.title }),
                                        Object(D.jsx)('span', {
                                            className: 'edit-component-icon',
                                            children: Object(D.jsx)(lt.a, {
                                                onClick: function () {
                                                    s(!0);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                e.componentItem.componentData.items.map(function (t, n) {
                                    return Object(D.jsxs)(
                                        'div',
                                        {
                                            className: e.componentItem.componentData.showProficiencyProgress
                                                ? 'skill-wrapper'
                                                : 'skill-wrapper min-margin',
                                            children: [
                                                Object(D.jsxs)('div', {
                                                    className: 'skill-header',
                                                    children: [
                                                        Object(D.jsx)('div', {
                                                            className: 'skill-title',
                                                            children: t.title,
                                                        }),
                                                        Object(D.jsxs)('div', {
                                                            className: 'skill-percentage '.concat(
                                                                e.componentItem.componentData.showProficiency
                                                                    ? ''
                                                                    : 'd-none'
                                                            ),
                                                            children: [' - ', t.proficiency],
                                                        }),
                                                    ],
                                                }),
                                                Object(D.jsx)('div', {
                                                    className: 'skill-progress',
                                                    children: Object(D.jsx)(K.a, {
                                                        className: e.componentItem.componentData.showProficiencyProgress
                                                            ? ''
                                                            : 'd-none',
                                                        variant: 'determinate',
                                                        value: Number(t.proficiency),
                                                    }),
                                                }),
                                            ],
                                        },
                                        n
                                    );
                                }),
                                Object(D.jsx)(ln, {
                                    open: c,
                                    setOpen: s,
                                    componentColumn: e.componentColumn,
                                    componentName: e.componentItem.name,
                                    editorData: e.componentItem.componentData,
                                }),
                            ],
                        });
                    }),
                mn = c.a.memo(dn),
                un = function (e) {
                    var t = Object(a.useState)(e.editorData),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1],
                        o = Object(l.c)(),
                        r = function (t, n) {
                            var a = Object(U.a)(Object(U.a)({}, c), {}, Object(H.a)({}, t, n));
                            s(a), e.setWidgetData(a);
                        },
                        m = function (e, t, n) {
                            var a = e.target.value,
                                s = Object(L.a)(c.items);
                            (s[t] = Object(U.a)(Object(U.a)({}, s[t]), {}, Object(H.a)({}, n, a))), r('items', s);
                        },
                        u = function () {
                            o(ie(null)), e.setOpen(!1);
                        };
                    return i.a.createPortal(
                        Object(D.jsxs)('div', {
                            className: 'editor-wrap',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'editor-section-header',
                                    children: [
                                        Object(D.jsx)(j.a, {
                                            variant: 'contained',
                                            size: 'small',
                                            onClick: function (t) {
                                                var n = Object(U.a)({}, c);
                                                o(se({ name: e.componentName, column: e.componentColumn, data: n })),
                                                    u(),
                                                    console.log(c);
                                            },
                                            disabled: !c.items.filter(function (e) {
                                                return e.socialPlatform.length > 0;
                                            }).length,
                                            children: 'Save Changes',
                                        }),
                                        Object(D.jsx)(j.a, {
                                            variant: 'outlined',
                                            size: 'small',
                                            onClick: u,
                                            children: 'Close',
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-heading-wrap',
                                    children: Object(D.jsx)(X.a, {
                                        fullWidth: !0,
                                        autoComplete: 'off',
                                        onChange: function (e) {
                                            var t = e.target.value;
                                            r('title', t);
                                        },
                                        value: c.title,
                                        variant: 'standard',
                                    }),
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-items-wrap',
                                    children: c.items.map(function (e, t) {
                                        return Object(D.jsxs)(
                                            'div',
                                            {
                                                children: [
                                                    Object(D.jsxs)('div', {
                                                        className: 'editor-item',
                                                        children: [
                                                            Object(D.jsxs)('div', {
                                                                children: [
                                                                    Object(D.jsx)(X.a, {
                                                                        label: 'Social Platform',
                                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                                        onChange: function (e) {
                                                                            return m(e, t, 'socialPlatform');
                                                                        },
                                                                        value: e.socialPlatform,
                                                                        inputProps: { style: { fontSize: 14 } },
                                                                        size: 'small',
                                                                    }),
                                                                    Object(D.jsx)(X.a, {
                                                                        label: 'Username or URL',
                                                                        sx: { mb: 1, mt: 1, mr: 1 },
                                                                        onChange: function (e) {
                                                                            return m(e, t, 'username');
                                                                        },
                                                                        value: e.username,
                                                                        inputProps: { style: { fontSize: 14 } },
                                                                        size: 'small',
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(D.jsx)(ut.a, {
                                                                onClick: function (e) {
                                                                    return (function (e, t) {
                                                                        var n = Object(L.a)(c.items);
                                                                        n.splice(t + 1, 0, {
                                                                            socialPlatform: '',
                                                                            username: '',
                                                                        }),
                                                                            r('items', n);
                                                                    })(0, t);
                                                                },
                                                                className: 'add-item-icon',
                                                            }),
                                                            Object(D.jsx)(bt.a, {
                                                                onClick: function (e) {
                                                                    return (function (e, t) {
                                                                        var n = Object(L.a)(c.items);
                                                                        n.splice(t, 1), r('items', n);
                                                                    })(0, t);
                                                                },
                                                                className: 'delete-item-icon '.concat(
                                                                    0 === t ? 'd-none' : ''
                                                                ),
                                                            }),
                                                        ],
                                                    }),
                                                    Object(D.jsx)(d.a, { sx: { height: 20 } }),
                                                    Object(D.jsx)(Jt.a, {}),
                                                    Object(D.jsx)(d.a, { sx: { height: 20 } }),
                                                ],
                                            },
                                            t
                                        );
                                    }),
                                }),
                            ],
                        }),
                        document.getElementById('editorPortal')
                    );
                },
                jn =
                    (n(407),
                    function (e) {
                        var t = Object(a.useState)(!1),
                            n = Object(M.a)(t, 2),
                            c = n[0],
                            s = n[1];
                        console.log('calling Social', c);
                        var i = Object(a.useState)(e.componentItem.componentData),
                            o = Object(M.a)(i, 2),
                            r = o[0],
                            d = o[1],
                            m = Object(l.c)(),
                            u = Object(l.d)(function (e) {
                                return e.resumeDataReducer.openEditorName;
                            });
                        return Object(D.jsxs)('div', {
                            className: 'resume-section resume-section-Social',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'resume-section-title',
                                    children: [
                                        Object(D.jsx)('span', { children: r.title }),
                                        Object(D.jsx)('span', {
                                            className: 'edit-component-icon',
                                            children: Object(D.jsx)(lt.a, {
                                                onClick: function () {
                                                    m(ie(e.componentItem.name)), s(!0);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'social-item-wrap',
                                    children: r.items.map(function (e, t) {
                                        return Object(D.jsxs)(
                                            'div',
                                            {
                                                className: 'social-item',
                                                children: [
                                                    Object(D.jsx)('div', {
                                                        className: 'social-platform resume-section-subtitle',
                                                        children: e.socialPlatform,
                                                    }),
                                                    Object(D.jsx)('div', {
                                                        className: 'social-username',
                                                        children: e.username,
                                                    }),
                                                ],
                                            },
                                            t
                                        );
                                    }),
                                }),
                                u === e.componentItem.name
                                    ? Object(D.jsx)(un, {
                                          setWidgetData: d,
                                          open: c,
                                          setOpen: s,
                                          componentColumn: e.componentColumn,
                                          componentName: e.componentItem.name,
                                          editorData: r,
                                      })
                                    : null,
                            ],
                        });
                    }),
                bn = c.a.memo(jn),
                pn = n(477),
                On = function (e) {
                    var t = Object(a.useState)(e.editorData),
                        n = Object(M.a)(t, 2),
                        c = n[0],
                        s = n[1],
                        o = Object(l.c)(),
                        r = function () {
                            o(ie(null)), e.setOpen(!1);
                        };
                    function d(t, n) {
                        var a = JSON.parse(JSON.stringify(c));
                        (a.styles.find(function (e) {
                            return e.rule === t.rule;
                        }).value = n),
                            s(a),
                            e.setWidgetData(a);
                    }
                    return i.a.createPortal(
                        Object(D.jsxs)('div', {
                            className: 'editor-wrap',
                            children: [
                                Object(D.jsxs)('div', {
                                    className: 'editor-section-header',
                                    children: [
                                        Object(D.jsx)(j.a, {
                                            variant: 'contained',
                                            size: 'small',
                                            onClick: function (t) {
                                                o(se({ name: e.componentName, column: e.componentColumn, data: c })),
                                                    r();
                                            },
                                            children: 'Save Changes',
                                        }),
                                        Object(D.jsx)(j.a, {
                                            variant: 'outlined',
                                            size: 'small',
                                            onClick: r,
                                            children: 'Close',
                                        }),
                                    ],
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-heading-wrap',
                                    children: Object(D.jsx)(X.a, {
                                        fullWidth: !0,
                                        label: 'Title',
                                        readOnly: !0,
                                        autoComplete: 'off',
                                        variant: 'standard',
                                        value: c.title,
                                    }),
                                }),
                                Object(D.jsx)('div', {
                                    className: 'editor-options-wrap',
                                    children: Object(D.jsx)(Y.a, {
                                        container: !0,
                                        spacing: 1,
                                        children: c.styles.map(function (e) {
                                            return Object(D.jsx)(
                                                Y.a,
                                                {
                                                    item: !0,
                                                    xs: 12,
                                                    md: 6,
                                                    children: Object(D.jsx)(X.a, {
                                                        type: e.type,
                                                        select: 'select' === e.type,
                                                        label: e.label + (e.unit ? ' ('.concat(e.unit, ')') : ''),
                                                        value: e.value,
                                                        margin: 'normal',
                                                        size: 'small',
                                                        fullWidth: !0,
                                                        InputProps: { inputProps: { min: 0, max: 100 } },
                                                        onChange: function (t) {
                                                            return (function (e, t) {
                                                                'number' === e.type
                                                                    ? (t || (t = 0), t >= 0 && t <= 100 && d(e, t))
                                                                    : d(e, t);
                                                            })(e, t.target.value);
                                                        },
                                                        children:
                                                            'select' === e.type &&
                                                            e.options.map(function (e) {
                                                                return Object(D.jsx)(
                                                                    pn.a,
                                                                    { value: e, children: e },
                                                                    e
                                                                );
                                                            }),
                                                    }),
                                                },
                                                e.rule
                                            );
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        document.getElementById('editorPortal')
                    );
                },
                gn =
                    (n(408),
                    function (e) {
                        var t = Object(a.useState)(!1),
                            n = Object(M.a)(t, 2),
                            c = n[0],
                            s = n[1],
                            i = Object(a.useState)(e.componentItem.componentData),
                            o = Object(M.a)(i, 2),
                            r = o[0],
                            d = o[1],
                            m = Object(l.c)(),
                            u = Object(l.d)(function (e) {
                                return e.resumeDataReducer.openEditorName;
                            }),
                            j = {};
                        r.styles.forEach(function (e) {
                            j[e.rule] = e.value + e.unit;
                        });
                        var b = Object(D.jsx)('div', {
                            className: 'resume-section-title border-none',
                            children: Object(D.jsx)('span', { children: r.title }),
                        });
                        return Object(D.jsxs)('div', {
                            className: 'resume-section',
                            children: [
                                'componentLibrary' === e.componentColumn && b,
                                Object(D.jsx)('span', {
                                    className: 'edit-component-icon',
                                    children: Object(D.jsx)(lt.a, {
                                        titleAccess: 'Edit',
                                        onClick: function () {
                                            m(ie(e.componentItem.name)), s(!0);
                                        },
                                    }),
                                }),
                                Object(D.jsx)('div', {
                                    className: 'divider-wrapper',
                                    children: Object(D.jsx)('hr', { style: j }),
                                }),
                                u === e.componentItem.name
                                    ? Object(D.jsx)(On, {
                                          open: c,
                                          setWidgetData: d,
                                          setOpen: s,
                                          componentColumn: e.componentColumn,
                                          componentName: e.componentItem.name,
                                          editorData: r,
                                      })
                                    : null,
                            ],
                        });
                    }),
                hn = c.a.memo(gn);
            var fn = function () {
                    var e,
                        t = Object(l.d)(function (e) {
                            return e;
                        }),
                        n = t.authReducer,
                        c = t.resumeDataReducer,
                        s = t.resumeSettingsReducer,
                        i = t.userDataReducer,
                        o = Object(l.d)(function (e) {
                            return e.resumeDataReducer.openEditorName;
                        }),
                        m = Object(a.useState)(null),
                        u = Object(M.a)(m, 2),
                        b = u[0],
                        p = u[1],
                        O = Object(a.useState)(!1),
                        g = Object(M.a)(O, 2),
                        h = g[0],
                        x = g[1],
                        v = Object(a.useState)(!1),
                        y = Object(M.a)(v, 2),
                        N = y[0],
                        C = y[1],
                        S = Object(a.useState)(!1),
                        k = Object(M.a)(S, 2),
                        I = k[0],
                        w = k[1],
                        P = Object(a.useState)(null),
                        R = Object(M.a)(P, 2),
                        z = R[0],
                        B = R[1],
                        T = Object(r.i)().resumeId,
                        A = Object(l.c)(),
                        E = function () {
                            A(ie('globalSetting' === o ? null : 'globalSetting'));
                        };
                    function F(e) {
                        n.userId &&
                            A(ne({ data: e, resumeId: T })).then(function (e) {
                                C(!1);
                            }),
                            setTimeout(function () {
                                W(e);
                            }, 1e3);
                    }
                    function J(e) {
                        n.userId && (A(le({ data: e, resumeId: T })), A(me(e)));
                    }
                    Object(a.useEffect)(
                        function () {
                            console.log('calling builder effect'), p(c.resumeData), B(s.resumeSettings);
                        },
                        [c]
                    ),
                        Object(a.useEffect)(
                            function () {
                                n.userId &&
                                    (console.log('calling builder auth effect'),
                                    A(te(T)).then(function (e) {
                                        e.payload &&
                                            (p(e.payload),
                                            console.log(e.payload),
                                            x(e.payload.pageTwo && e.payload.pageTwo.length > 0));
                                    }),
                                    A(ge(n.userId)),
                                    A(re(T)).then(function (e) {
                                        if ((B(e.payload), e.payload)) {
                                            var t = document.querySelector(':root');
                                            t.style.setProperty('--color-font-heading', e.payload.headingFontColor),
                                                t.style.setProperty(
                                                    '--color-font-subheading',
                                                    e.payload.subheadingFontColor
                                                ),
                                                t.style.setProperty('--color-font-body', e.payload.bodyFontColor),
                                                t.style.setProperty(
                                                    '--color-font-about-section',
                                                    e.payload.aboutSectionFontColor
                                                ),
                                                t.style.setProperty('--color-sidebar-body', e.payload.sidebarBodyColor),
                                                t.style.setProperty(
                                                    '--color-sidebar-heading',
                                                    e.payload.sidebarHeadingColor
                                                );
                                        }
                                    }));
                            },
                            [n]
                        );
                    var W = function (e) {
                            for (
                                var t = document.querySelector('#main .resume-paper-content').clientHeight,
                                    n = document.querySelector('#main .resume-paper-content').children,
                                    a = 0,
                                    c = 0;
                                c < n.length;
                                c++
                            )
                                a += n[c].clientHeight;
                            a + 30 > t
                                ? (console.log('if- need Page two'), x(!0), Q(e))
                                : (console.log('else-'), console.log(t, a));
                        },
                        Q = function (e) {
                            var t = JSON.parse(JSON.stringify(e));
                            t.pageTwo.push(t.main[t.main.length - 1]), t.main.pop(), p(t), F(t);
                        },
                        $ = function () {
                            if (z.sidebar) {
                                var e = Object(U.a)(
                                    Object(U.a)({}, b),
                                    {},
                                    {
                                        componentLibrary: [].concat(
                                            Object(L.a)(b.componentLibrary),
                                            Object(L.a)(b.sidebar)
                                        ),
                                        sidebar: [],
                                    }
                                );
                                p(e);
                            }
                            B(Object(U.a)(Object(U.a)({}, z), {}, { sidebar: !z.sidebar })),
                                J(Object(U.a)(Object(U.a)({}, z), {}, { sidebar: !z.sidebar }));
                        },
                        ee = function () {
                            var e = document.querySelector('#pageOne');
                            Xe()(e).then(function (e) {
                                var t = JSON.parse(i.userData.userResumes);
                                (t.filter(function (e) {
                                    return e.resumeId.toString() === T.toString();
                                })[0].resumeImage = e.toDataURL('image/jpeg')),
                                    A(he({ userId: n.userId, data: JSON.stringify(t) }));
                            });
                        },
                        ae = function (e, t, n, a) {
                            t = Object(U.a)(
                                Object(U.a)({}, t),
                                {},
                                {
                                    copy: !0,
                                    name: ''.concat(t.name, '-').concat(Math.floor(Math.random() * Date.now())),
                                }
                            );
                            var c = JSON.parse(JSON.stringify(b));
                            c[a].splice(n + 1, 0, t), p(c), F(c);
                        },
                        ce = function (e, t, n, a) {
                            var c = JSON.parse(JSON.stringify(b));
                            c[a].splice(n, 1), c.componentLibrary.push(t), p(c), F(c);
                        },
                        se = function (e, t, n, a) {
                            var c = JSON.parse(JSON.stringify(b));
                            c[a].splice(n, 1), p(c), F(c);
                        };
                    function oe(e, t, n) {
                        switch (e) {
                            case 'Achievements':
                                return Object(D.jsx)(gt, { componentColumn: n, componentItem: t });
                            case 'BasicInfo':
                                return Object(D.jsx)(Bt, { componentColumn: n, componentItem: t });
                            case 'Experience':
                                return Object(D.jsx)(Kt, { componentColumn: n, componentItem: t });
                            case 'Education':
                                return Object(D.jsx)(Lt, { componentColumn: n, componentItem: t });
                            case 'Languages':
                                return Object(D.jsx)(en, { componentColumn: n, componentItem: t });
                            case 'ProfessionalSummary':
                                return Object(D.jsx)(an, { componentColumn: n, componentItem: t });
                            case 'Skills':
                                return Object(D.jsx)(rn, { componentColumn: n, componentItem: t });
                            case 'SkillsWithProgress':
                                return Object(D.jsx)(mn, { componentColumn: n, componentItem: t });
                            case 'Social':
                                return Object(D.jsx)(bn, { componentColumn: n, componentItem: t });
                            case 'Divider':
                                return Object(D.jsx)(hn, { componentColumn: n, componentItem: t });
                            default:
                                return null;
                        }
                    }
                    return (
                        (e =
                            b && z
                                ? Object(D.jsxs)(Z.a, {
                                      onDragEnd: function (e) {
                                          var t = e.destination,
                                              n = e.source,
                                              a = e.draggableId;
                                          if (t && (t.droppableId !== n.droppableId || t.index !== n.index))
                                              if (t.droppableId === n.droppableId) {
                                                  var c = Array.from(b[n.droppableId]);
                                                  c.splice(n.index, 1),
                                                      c.splice(
                                                          t.index,
                                                          0,
                                                          b[t.droppableId].filter(function (e) {
                                                              return e.name === a;
                                                          })[0]
                                                      );
                                                  var s = t.droppableId,
                                                      i = Object(U.a)(Object(U.a)({}, b), {}, Object(H.a)({}, s, c));
                                                  p(i), F(i);
                                              } else {
                                                  var o,
                                                      r = n.droppableId,
                                                      l = t.droppableId,
                                                      d = Array.from(b[n.droppableId]),
                                                      m = Array.from(b[t.droppableId]);
                                                  d.splice(n.index, 1),
                                                      m.splice(
                                                          t.index,
                                                          0,
                                                          b[n.droppableId].filter(function (t) {
                                                              return t.name === e.draggableId;
                                                          })[0]
                                                      );
                                                  var u = Object(U.a)(
                                                      Object(U.a)({}, b),
                                                      {},
                                                      ((o = {}), Object(H.a)(o, r, d), Object(H.a)(o, l, m), o)
                                                  );
                                                  p(u), F(u);
                                              }
                                      },
                                      children: [
                                          Object(D.jsx)(G.a, {
                                              open: I,
                                              autoHideDuration: 5e3,
                                              anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                                              onClose: function () {
                                                  w(!1);
                                              },
                                              children: Object(D.jsx)(q.a, {
                                                  variant: 'filled',
                                                  severity: 'success',
                                                  color: 'primary',
                                                  sx: { width: '100%' },
                                                  children: 'New Widgets Available. Try Out.',
                                              }),
                                          }),
                                          Object(D.jsx)('div', {
                                              className: 'resume-paper-wrap',
                                              children: Object(D.jsxs)(Y.a, {
                                                  container: !0,
                                                  spacing: 2,
                                                  children: [
                                                      Object(D.jsxs)(Y.a, {
                                                          item: !0,
                                                          xs: 7,
                                                          children: [
                                                              Object(D.jsxs)('div', {
                                                                  className: 'layout-options',
                                                                  children: [
                                                                      Object(D.jsxs)('div', {
                                                                          className: 'layout-option-items',
                                                                          children: [
                                                                              Object(D.jsx)('div', {
                                                                                  className: 'layout-option-item',
                                                                                  children: z.sidebar
                                                                                      ? Object(D.jsx)(j.a, {
                                                                                            variant: 'outlined',
                                                                                            color: 'primary',
                                                                                            size: 'small',
                                                                                            startIcon: Object(D.jsx)(
                                                                                                Se.a,
                                                                                                {}
                                                                                            ),
                                                                                            onClick: $,
                                                                                            children: 'Single Column',
                                                                                        })
                                                                                      : Object(D.jsx)(j.a, {
                                                                                            variant: 'outlined',
                                                                                            color: 'primary',
                                                                                            size: 'small',
                                                                                            startIcon: Object(D.jsx)(
                                                                                                Ie.a,
                                                                                                {}
                                                                                            ),
                                                                                            onClick: $,
                                                                                            children: 'Sidebar',
                                                                                        }),
                                                                              }),
                                                                              Object(D.jsx)('div', {
                                                                                  className: 'layout-option-item',
                                                                                  children: h
                                                                                      ? Object(D.jsx)(j.a, {
                                                                                            variant: 'outlined',
                                                                                            color: 'primary',
                                                                                            size: 'small',
                                                                                            startIcon: Object(D.jsx)(
                                                                                                Ae.a,
                                                                                                {}
                                                                                            ),
                                                                                            onClick: function () {
                                                                                                x(!1);
                                                                                                var e = JSON.parse(
                                                                                                        JSON.stringify(
                                                                                                            b
                                                                                                        )
                                                                                                    ),
                                                                                                    t = [].concat(
                                                                                                        Object(L.a)(
                                                                                                            e.componentLibrary
                                                                                                        ),
                                                                                                        Object(L.a)(
                                                                                                            e.pageTwo
                                                                                                        )
                                                                                                    );
                                                                                                (e.componentLibrary =
                                                                                                    t),
                                                                                                    (e.pageTwo = []),
                                                                                                    p(e),
                                                                                                    F(e);
                                                                                            },
                                                                                            children: 'Remove Page',
                                                                                        })
                                                                                      : Object(D.jsx)(j.a, {
                                                                                            variant: 'outlined',
                                                                                            color: 'primary',
                                                                                            size: 'small',
                                                                                            startIcon: Object(D.jsx)(
                                                                                                Be.a,
                                                                                                {}
                                                                                            ),
                                                                                            onClick: function () {
                                                                                                x(!0),
                                                                                                    setTimeout(
                                                                                                        function () {
                                                                                                            document
                                                                                                                .getElementById(
                                                                                                                    'resumePageSeparator'
                                                                                                                )
                                                                                                                .scrollIntoView(
                                                                                                                    {
                                                                                                                        behavior:
                                                                                                                            'smooth',
                                                                                                                    },
                                                                                                                    300
                                                                                                                );
                                                                                                        },
                                                                                                        200
                                                                                                    );
                                                                                            },
                                                                                            children: 'Add Page',
                                                                                        }),
                                                                              }),
                                                                              Object(D.jsx)('div', {
                                                                                  className: 'layout-option-item',
                                                                                  children: Object(D.jsx)(j.a, {
                                                                                      variant: 'outlined',
                                                                                      color: 'primary',
                                                                                      size: 'small',
                                                                                      startIcon: Object(D.jsx)(
                                                                                          Re.a,
                                                                                          {}
                                                                                      ),
                                                                                      onClick: E,
                                                                                      children: 'Settings',
                                                                                  }),
                                                                              }),
                                                                          ],
                                                                      }),
                                                                      Object(D.jsxs)('div', {
                                                                          className: 'layout-option-items',
                                                                          children: [
                                                                              Object(D.jsx)('div', {
                                                                                  className: 'layout-option-item',
                                                                                  children: Object(D.jsx)(j.a, {
                                                                                      onClick: window.print,
                                                                                      startIcon: Object(D.jsx)(
                                                                                          _e.a,
                                                                                          {}
                                                                                      ),
                                                                                      variant: 'contained',
                                                                                      color: 'primary',
                                                                                      size: 'small',
                                                                                      disableElevation: !0,
                                                                                      children: 'Download',
                                                                                  }),
                                                                              }),
                                                                              Object(D.jsx)('div', {
                                                                                  className: 'layout-option-item',
                                                                                  children: Object(D.jsx)(j.a, {
                                                                                      className: N
                                                                                          ? 'item-disabled'
                                                                                          : '',
                                                                                      color: 'primary',
                                                                                      variant: 'contained',
                                                                                      disableElevation: !0,
                                                                                      size: 'small',
                                                                                      startIcon: Object(D.jsx)(
                                                                                          Le.a,
                                                                                          {}
                                                                                      ),
                                                                                      onClick: function () {
                                                                                          C(!0),
                                                                                              n.userId && (F(b), ee());
                                                                                      },
                                                                                      children: 'Save Changes',
                                                                                  }),
                                                                              }),
                                                                          ],
                                                                      }),
                                                                  ],
                                                              }),
                                                              Object(D.jsxs)('div', {
                                                                  className: 'resume-paper-container',
                                                                  id: 'resumPaperContainer',
                                                                  children: [
                                                                      Object(D.jsx)(_.a, {
                                                                          className: 'resume-paper heading-alignment-'
                                                                              .concat(
                                                                                  z.headingAlignment,
                                                                                  ' heading-font-'
                                                                              )
                                                                              .concat(
                                                                                  z.headingFontSize,
                                                                                  ' subheading-font-'
                                                                              )
                                                                              .concat(
                                                                                  z.subheadingFontSize,
                                                                                  ' body-font-'
                                                                              )
                                                                              .concat(z.bodyFontSize),
                                                                          sx: {
                                                                              fontSize:
                                                                                  'medium' === z.bodyFontSize
                                                                                      ? '15px'
                                                                                      : z.bodyFontSize,
                                                                          },
                                                                          elevation: 3,
                                                                          children: Object(D.jsxs)('div', {
                                                                              id: 'pageOne',
                                                                              children: [
                                                                                  Object(D.jsx)(Y.a, {
                                                                                      item: !0,
                                                                                      xs: 12,
                                                                                      id: 'header',
                                                                                      className: ''.concat(
                                                                                          b.header.length > 0
                                                                                              ? ''
                                                                                              : 'no-padding'
                                                                                      ),
                                                                                      sx: {
                                                                                          backgroundColor:
                                                                                              z.headerBackgroundColor,
                                                                                          color: z.aboutSectionFontColor,
                                                                                      },
                                                                                      children: Object(D.jsx)(Z.c, {
                                                                                          droppableId: 'header',
                                                                                          children: function (e, t) {
                                                                                              return Object(D.jsxs)(
                                                                                                  'div',
                                                                                                  Object(U.a)(
                                                                                                      Object(U.a)(
                                                                                                          {
                                                                                                              ref: e.innerRef,
                                                                                                          },
                                                                                                          e.droppableProps
                                                                                                      ),
                                                                                                      {},
                                                                                                      {
                                                                                                          className:
                                                                                                              t.isDraggingOver
                                                                                                                  ? 'resume-paper-content-draggin-over'
                                                                                                                  : 'resume-paper-content',
                                                                                                          children: [
                                                                                                              b.header.map(
                                                                                                                  function (
                                                                                                                      e,
                                                                                                                      t
                                                                                                                  ) {
                                                                                                                      return Object(
                                                                                                                          D.jsx
                                                                                                                      )(
                                                                                                                          Z.b,
                                                                                                                          {
                                                                                                                              draggableId:
                                                                                                                                  e.name,
                                                                                                                              index: t,
                                                                                                                              children:
                                                                                                                                  function (
                                                                                                                                      n,
                                                                                                                                      c
                                                                                                                                  ) {
                                                                                                                                      return Object(
                                                                                                                                          a.createElement
                                                                                                                                      )(
                                                                                                                                          'div',
                                                                                                                                          Object(
                                                                                                                                              U.a
                                                                                                                                          )(
                                                                                                                                              Object(
                                                                                                                                                  U.a
                                                                                                                                              )(
                                                                                                                                                  {
                                                                                                                                                      className:
                                                                                                                                                          c.isDragging
                                                                                                                                                              ? 'component-dragging'
                                                                                                                                                              : 'resume-section-wrap',
                                                                                                                                                      ref: n.innerRef,
                                                                                                                                                  },
                                                                                                                                                  n.draggableProps
                                                                                                                                              ),
                                                                                                                                              {},
                                                                                                                                              {
                                                                                                                                                  key: e.name,
                                                                                                                                              }
                                                                                                                                          ),
                                                                                                                                          oe(
                                                                                                                                              e.componentType,
                                                                                                                                              e,
                                                                                                                                              'header'
                                                                                                                                          ),
                                                                                                                                          Object(
                                                                                                                                              D.jsxs
                                                                                                                                          )(
                                                                                                                                              'div',
                                                                                                                                              {
                                                                                                                                                  className:
                                                                                                                                                      'overlay',
                                                                                                                                                  children:
                                                                                                                                                      [
                                                                                                                                                          Object(
                                                                                                                                                              D.jsx
                                                                                                                                                          )(
                                                                                                                                                              'span',
                                                                                                                                                              Object(
                                                                                                                                                                  U.a
                                                                                                                                                              )(
                                                                                                                                                                  Object(
                                                                                                                                                                      U.a
                                                                                                                                                                  )(
                                                                                                                                                                      {
                                                                                                                                                                          className:
                                                                                                                                                                              'drag-handle',
                                                                                                                                                                      },
                                                                                                                                                                      n.dragHandleProps
                                                                                                                                                                  ),
                                                                                                                                                                  {},
                                                                                                                                                                  {
                                                                                                                                                                      children:
                                                                                                                                                                          Object(
                                                                                                                                                                              D.jsx
                                                                                                                                                                          )(
                                                                                                                                                                              Me.a,
                                                                                                                                                                              {
                                                                                                                                                                                  titleAccess:
                                                                                                                                                                                      'Grab & Move',
                                                                                                                                                                              }
                                                                                                                                                                          ),
                                                                                                                                                                  }
                                                                                                                                                              )
                                                                                                                                                          ),
                                                                                                                                                          Object(
                                                                                                                                                              D.jsx
                                                                                                                                                          )(
                                                                                                                                                              'span',
                                                                                                                                                              {
                                                                                                                                                                  className:
                                                                                                                                                                      'copy-component',
                                                                                                                                                                  children:
                                                                                                                                                                      Object(
                                                                                                                                                                          D.jsx
                                                                                                                                                                      )(
                                                                                                                                                                          De.a,
                                                                                                                                                                          {
                                                                                                                                                                              titleAccess:
                                                                                                                                                                                  'Copy',
                                                                                                                                                                              onClick:
                                                                                                                                                                                  function (
                                                                                                                                                                                      n
                                                                                                                                                                                  ) {
                                                                                                                                                                                      return ae(
                                                                                                                                                                                          0,
                                                                                                                                                                                          e,
                                                                                                                                                                                          t,
                                                                                                                                                                                          'header'
                                                                                                                                                                                      );
                                                                                                                                                                                  },
                                                                                                                                                                          }
                                                                                                                                                                      ),
                                                                                                                                                              }
                                                                                                                                                          ),
                                                                                                                                                          Object(
                                                                                                                                                              D.jsx
                                                                                                                                                          )(
                                                                                                                                                              'span',
                                                                                                                                                              {
                                                                                                                                                                  className:
                                                                                                                                                                      'remove-component',
                                                                                                                                                                  children:
                                                                                                                                                                      Object(
                                                                                                                                                                          D.jsx
                                                                                                                                                                      )(
                                                                                                                                                                          Fe.a,
                                                                                                                                                                          {
                                                                                                                                                                              titleAccess:
                                                                                                                                                                                  'Remove From Resume',
                                                                                                                                                                              onClick:
                                                                                                                                                                                  function (
                                                                                                                                                                                      n
                                                                                                                                                                                  ) {
                                                                                                                                                                                      return ce(
                                                                                                                                                                                          0,
                                                                                                                                                                                          e,
                                                                                                                                                                                          t,
                                                                                                                                                                                          'header'
                                                                                                                                                                                      );
                                                                                                                                                                                  },
                                                                                                                                                                          }
                                                                                                                                                                      ),
                                                                                                                                                              }
                                                                                                                                                          ),
                                                                                                                                                          Object(
                                                                                                                                                              D.jsx
                                                                                                                                                          )(
                                                                                                                                                              'span',
                                                                                                                                                              {
                                                                                                                                                                  className:
                                                                                                                                                                      e.copy
                                                                                                                                                                          ? 'delete-component'
                                                                                                                                                                          : 'd-none',
                                                                                                                                                                  children:
                                                                                                                                                                      Object(
                                                                                                                                                                          D.jsx
                                                                                                                                                                      )(
                                                                                                                                                                          qe.a,
                                                                                                                                                                          {
                                                                                                                                                                              onClick:
                                                                                                                                                                                  function (
                                                                                                                                                                                      e
                                                                                                                                                                                  ) {
                                                                                                                                                                                      return se(
                                                                                                                                                                                          0,
                                                                                                                                                                                          0,
                                                                                                                                                                                          t,
                                                                                                                                                                                          'header'
                                                                                                                                                                                      );
                                                                                                                                                                                  },
                                                                                                                                                                          }
                                                                                                                                                                      ),
                                                                                                                                                              }
                                                                                                                                                          ),
                                                                                                                                                      ],
                                                                                                                                              }
                                                                                                                                          )
                                                                                                                                      );
                                                                                                                                  },
                                                                                                                          },
                                                                                                                          e.name
                                                                                                                      );
                                                                                                                  }
                                                                                                              ),
                                                                                                              e.placeholder,
                                                                                                          ],
                                                                                                      }
                                                                                                  )
                                                                                              );
                                                                                          },
                                                                                      }),
                                                                                  }),
                                                                                  Object(D.jsxs)('div', {
                                                                                      className:
                                                                                          'resume-paper-main-content sidebar-'.concat(
                                                                                              z.sidebarPosition
                                                                                          ),
                                                                                      children: [
                                                                                          Object(D.jsx)(Y.a, {
                                                                                              item: !0,
                                                                                              xs: z.sidebar ? 7 : 12,
                                                                                              id: 'main',
                                                                                              className: ''.concat(
                                                                                                  b.header.length > 0
                                                                                                      ? ''
                                                                                                      : 'padding'
                                                                                              ),
                                                                                              sx: {
                                                                                                  backgroundColor:
                                                                                                      z.mainBackgroundColor,
                                                                                                  color: z.bodyFontColor,
                                                                                              },
                                                                                              children: Object(D.jsx)(
                                                                                                  Z.c,
                                                                                                  {
                                                                                                      droppableId:
                                                                                                          'main',
                                                                                                      children:
                                                                                                          function (
                                                                                                              e,
                                                                                                              t
                                                                                                          ) {
                                                                                                              return Object(
                                                                                                                  D.jsxs
                                                                                                              )(
                                                                                                                  'div',
                                                                                                                  Object(
                                                                                                                      U.a
                                                                                                                  )(
                                                                                                                      Object(
                                                                                                                          U.a
                                                                                                                      )(
                                                                                                                          {
                                                                                                                              ref: e.innerRef,
                                                                                                                          },
                                                                                                                          e.droppableProps
                                                                                                                      ),
                                                                                                                      {},
                                                                                                                      {
                                                                                                                          className:
                                                                                                                              t.isDraggingOver
                                                                                                                                  ? 'resume-paper-content-draggin-over'
                                                                                                                                  : 'resume-paper-content',
                                                                                                                          children:
                                                                                                                              [
                                                                                                                                  b.main.map(
                                                                                                                                      function (
                                                                                                                                          e,
                                                                                                                                          t
                                                                                                                                      ) {
                                                                                                                                          return Object(
                                                                                                                                              D.jsx
                                                                                                                                          )(
                                                                                                                                              Z.b,
                                                                                                                                              {
                                                                                                                                                  draggableId:
                                                                                                                                                      e.name,
                                                                                                                                                  index: t,
                                                                                                                                                  children:
                                                                                                                                                      function (
                                                                                                                                                          n,
                                                                                                                                                          c
                                                                                                                                                      ) {
                                                                                                                                                          return Object(
                                                                                                                                                              a.createElement
                                                                                                                                                          )(
                                                                                                                                                              'div',
                                                                                                                                                              Object(
                                                                                                                                                                  U.a
                                                                                                                                                              )(
                                                                                                                                                                  Object(
                                                                                                                                                                      U.a
                                                                                                                                                                  )(
                                                                                                                                                                      {
                                                                                                                                                                          className:
                                                                                                                                                                              c.isDragging
                                                                                                                                                                                  ? 'resume-section-wrap component-dragging'
                                                                                                                                                                                  : 'resume-section-wrap',
                                                                                                                                                                          ref: n.innerRef,
                                                                                                                                                                      },
                                                                                                                                                                      n.draggableProps
                                                                                                                                                                  ),
                                                                                                                                                                  {},
                                                                                                                                                                  {
                                                                                                                                                                      key: e.name,
                                                                                                                                                                  }
                                                                                                                                                              ),
                                                                                                                                                              oe(
                                                                                                                                                                  e.componentType,
                                                                                                                                                                  e,
                                                                                                                                                                  'main'
                                                                                                                                                              ),
                                                                                                                                                              Object(
                                                                                                                                                                  D.jsxs
                                                                                                                                                              )(
                                                                                                                                                                  'div',
                                                                                                                                                                  {
                                                                                                                                                                      className:
                                                                                                                                                                          'overlay',
                                                                                                                                                                      children:
                                                                                                                                                                          [
                                                                                                                                                                              Object(
                                                                                                                                                                                  D.jsx
                                                                                                                                                                              )(
                                                                                                                                                                                  'span',
                                                                                                                                                                                  Object(
                                                                                                                                                                                      U.a
                                                                                                                                                                                  )(
                                                                                                                                                                                      Object(
                                                                                                                                                                                          U.a
                                                                                                                                                                                      )(
                                                                                                                                                                                          {
                                                                                                                                                                                              className:
                                                                                                                                                                                                  'drag-handle',
                                                                                                                                                                                          },
                                                                                                                                                                                          n.dragHandleProps
                                                                                                                                                                                      ),
                                                                                                                                                                                      {},
                                                                                                                                                                                      {
                                                                                                                                                                                          children:
                                                                                                                                                                                              Object(
                                                                                                                                                                                                  D.jsx
                                                                                                                                                                                              )(
                                                                                                                                                                                                  Me.a,
                                                                                                                                                                                                  {
                                                                                                                                                                                                      titleAccess:
                                                                                                                                                                                                          'Grab & Move',
                                                                                                                                                                                                  }
                                                                                                                                                                                              ),
                                                                                                                                                                                      }
                                                                                                                                                                                  )
                                                                                                                                                                              ),
                                                                                                                                                                              Object(
                                                                                                                                                                                  D.jsx
                                                                                                                                                                              )(
                                                                                                                                                                                  'span',
                                                                                                                                                                                  {
                                                                                                                                                                                      className:
                                                                                                                                                                                          'copy-component',
                                                                                                                                                                                      children:
                                                                                                                                                                                          Object(
                                                                                                                                                                                              D.jsx
                                                                                                                                                                                          )(
                                                                                                                                                                                              De.a,
                                                                                                                                                                                              {
                                                                                                                                                                                                  titleAccess:
                                                                                                                                                                                                      'Copy',
                                                                                                                                                                                                  onClick:
                                                                                                                                                                                                      function (
                                                                                                                                                                                                          n
                                                                                                                                                                                                      ) {
                                                                                                                                                                                                          return ae(
                                                                                                                                                                                                              0,
                                                                                                                                                                                                              e,
                                                                                                                                                                                                              t,
                                                                                                                                                                                                              'main'
                                                                                                                                                                                                          );
                                                                                                                                                                                                      },
                                                                                                                                                                                              }
                                                                                                                                                                                          ),
                                                                                                                                                                                  }
                                                                                                                                                                              ),
                                                                                                                                                                              Object(
                                                                                                                                                                                  D.jsx
                                                                                                                                                                              )(
                                                                                                                                                                                  'span',
                                                                                                                                                                                  {
                                                                                                                                                                                      className:
                                                                                                                                                                                          'remove-component',
                                                                                                                                                                                      children:
                                                                                                                                                                                          Object(
                                                                                                                                                                                              D.jsx
                                                                                                                                                                                          )(
                                                                                                                                                                                              Fe.a,
                                                                                                                                                                                              {
                                                                                                                                                                                                  titleAccess:
                                                                                                                                                                                                      'Remove From Resume',
                                                                                                                                                                                                  onClick:
                                                                                                                                                                                                      function (
                                                                                                                                                                                                          n
                                                                                                                                                                                                      ) {
                                                                                                                                                                                                          return ce(
                                                                                                                                                                                                              0,
                                                                                                                                                                                                              e,
                                                                                                                                                                                                              t,
                                                                                                                                                                                                              'main'
                                                                                                                                                                                                          );
                                                                                                                                                                                                      },
                                                                                                                                                                                              }
                                                                                                                                                                                          ),
                                                                                                                                                                                  }
                                                                                                                                                                              ),
                                                                                                                                                                              Object(
                                                                                                                                                                                  D.jsx
                                                                                                                                                                              )(
                                                                                                                                                                                  'span',
                                                                                                                                                                                  {
                                                                                                                                                                                      className:
                                                                                                                                                                                          e.copy
                                                                                                                                                                                              ? 'delete-component'
                                                                                                                                                                                              : 'd-none',
                                                                                                                                                                                      children:
                                                                                                                                                                                          Object(
                                                                                                                                                                                              D.jsx
                                                                                                                                                                                          )(
                                                                                                                                                                                              qe.a,
                                                                                                                                                                                              {
                                                                                                                                                                                                  onClick:
                                                                                                                                                                                                      function (
                                                                                                                                                                                                          e
                                                                                                                                                                                                      ) {
                                                                                                                                                                                                          return se(
                                                                                                                                                                                                              0,
                                                                                                                                                                                                              0,
                                                                                                                                                                                                              t,
                                                                                                                                                                                                              'main'
                                                                                                                                                                                                          );
                                                                                                                                                                                                      },
                                                                                                                                                                                              }
                                                                                                                                                                                          ),
                                                                                                                                                                                  }
                                                                                                                                                                              ),
                                                                                                                                                                          ],
                                                                                                                                                                  }
                                                                                                                                                              )
                                                                                                                                                          );
                                                                                                                                                      },
                                                                                                                                              },
                                                                                                                                              e.name
                                                                                                                                          );
                                                                                                                                      }
                                                                                                                                  ),
                                                                                                                                  e.placeholder,
                                                                                                                              ],
                                                                                                                      }
                                                                                                                  )
                                                                                                              );
                                                                                                          },
                                                                                                  }
                                                                                              ),
                                                                                          }),
                                                                                          z.sidebar
                                                                                              ? Object(D.jsx)(Y.a, {
                                                                                                    item: !0,
                                                                                                    xs: 5,
                                                                                                    id: 'sidebar',
                                                                                                    sx: {
                                                                                                        backgroundColor:
                                                                                                            z.sidebarBackgroundColor,
                                                                                                        color: z.sidebarBodyColor,
                                                                                                    },
                                                                                                    className:
                                                                                                        ''.concat(
                                                                                                            b.header
                                                                                                                .length >
                                                                                                                0
                                                                                                                ? ''
                                                                                                                : 'padding'
                                                                                                        ),
                                                                                                    children: Object(
                                                                                                        D.jsx
                                                                                                    )(Z.c, {
                                                                                                        droppableId:
                                                                                                            'sidebar',
                                                                                                        children:
                                                                                                            function (
                                                                                                                e,
                                                                                                                t
                                                                                                            ) {
                                                                                                                return Object(
                                                                                                                    D.jsxs
                                                                                                                )(
                                                                                                                    'div',
                                                                                                                    Object(
                                                                                                                        U.a
                                                                                                                    )(
                                                                                                                        Object(
                                                                                                                            U.a
                                                                                                                        )(
                                                                                                                            {
                                                                                                                                ref: e.innerRef,
                                                                                                                            },
                                                                                                                            e.droppableProps
                                                                                                                        ),
                                                                                                                        {},
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                t.isDraggingOver
                                                                                                                                    ? 'resume-paper-content resume-paper-content-draggin-over sidebar-column'
                                                                                                                                    : 'resume-paper-content sidebar-column',
                                                                                                                            children:
                                                                                                                                [
                                                                                                                                    e.isDragging,
                                                                                                                                    b.sidebar.map(
                                                                                                                                        function (
                                                                                                                                            e,
                                                                                                                                            t
                                                                                                                                        ) {
                                                                                                                                            return Object(
                                                                                                                                                D.jsx
                                                                                                                                            )(
                                                                                                                                                Z.b,
                                                                                                                                                {
                                                                                                                                                    draggableId:
                                                                                                                                                        e.name,
                                                                                                                                                    index: t,
                                                                                                                                                    children:
                                                                                                                                                        function (
                                                                                                                                                            n,
                                                                                                                                                            c
                                                                                                                                                        ) {
                                                                                                                                                            return Object(
                                                                                                                                                                a.createElement
                                                                                                                                                            )(
                                                                                                                                                                'div',
                                                                                                                                                                Object(
                                                                                                                                                                    U.a
                                                                                                                                                                )(
                                                                                                                                                                    Object(
                                                                                                                                                                        U.a
                                                                                                                                                                    )(
                                                                                                                                                                        {
                                                                                                                                                                            className:
                                                                                                                                                                                c.isDragging
                                                                                                                                                                                    ? 'component-dragging'
                                                                                                                                                                                    : 'resume-section-wrap',
                                                                                                                                                                            ref: n.innerRef,
                                                                                                                                                                        },
                                                                                                                                                                        n.draggableProps
                                                                                                                                                                    ),
                                                                                                                                                                    {},
                                                                                                                                                                    {
                                                                                                                                                                        key: e.name,
                                                                                                                                                                    }
                                                                                                                                                                ),
                                                                                                                                                                oe(
                                                                                                                                                                    e.componentType,
                                                                                                                                                                    e,
                                                                                                                                                                    'sidebar'
                                                                                                                                                                ),
                                                                                                                                                                Object(
                                                                                                                                                                    D.jsxs
                                                                                                                                                                )(
                                                                                                                                                                    'div',
                                                                                                                                                                    {
                                                                                                                                                                        className:
                                                                                                                                                                            'overlay',
                                                                                                                                                                        children:
                                                                                                                                                                            [
                                                                                                                                                                                Object(
                                                                                                                                                                                    D.jsx
                                                                                                                                                                                )(
                                                                                                                                                                                    'span',
                                                                                                                                                                                    Object(
                                                                                                                                                                                        U.a
                                                                                                                                                                                    )(
                                                                                                                                                                                        Object(
                                                                                                                                                                                            U.a
                                                                                                                                                                                        )(
                                                                                                                                                                                            {
                                                                                                                                                                                                className:
                                                                                                                                                                                                    'drag-handle',
                                                                                                                                                                                            },
                                                                                                                                                                                            n.dragHandleProps
                                                                                                                                                                                        ),
                                                                                                                                                                                        {},
                                                                                                                                                                                        {
                                                                                                                                                                                            children:
                                                                                                                                                                                                Object(
                                                                                                                                                                                                    D.jsx
                                                                                                                                                                                                )(
                                                                                                                                                                                                    Me.a,
                                                                                                                                                                                                    {
                                                                                                                                                                                                        titleAccess:
                                                                                                                                                                                                            'Grab & Move',
                                                                                                                                                                                                    }
                                                                                                                                                                                                ),
                                                                                                                                                                                        }
                                                                                                                                                                                    )
                                                                                                                                                                                ),
                                                                                                                                                                                Object(
                                                                                                                                                                                    D.jsx
                                                                                                                                                                                )(
                                                                                                                                                                                    'span',
                                                                                                                                                                                    {
                                                                                                                                                                                        className:
                                                                                                                                                                                            'copy-component',
                                                                                                                                                                                        children:
                                                                                                                                                                                            Object(
                                                                                                                                                                                                D.jsx
                                                                                                                                                                                            )(
                                                                                                                                                                                                De.a,
                                                                                                                                                                                                {
                                                                                                                                                                                                    titleAccess:
                                                                                                                                                                                                        'Copy',
                                                                                                                                                                                                    onClick:
                                                                                                                                                                                                        function (
                                                                                                                                                                                                            n
                                                                                                                                                                                                        ) {
                                                                                                                                                                                                            return ae(
                                                                                                                                                                                                                0,
                                                                                                                                                                                                                e,
                                                                                                                                                                                                                t,
                                                                                                                                                                                                                'sidebar'
                                                                                                                                                                                                            );
                                                                                                                                                                                                        },
                                                                                                                                                                                                }
                                                                                                                                                                                            ),
                                                                                                                                                                                    }
                                                                                                                                                                                ),
                                                                                                                                                                                Object(
                                                                                                                                                                                    D.jsx
                                                                                                                                                                                )(
                                                                                                                                                                                    'span',
                                                                                                                                                                                    {
                                                                                                                                                                                        className:
                                                                                                                                                                                            'remove-component',
                                                                                                                                                                                        children:
                                                                                                                                                                                            Object(
                                                                                                                                                                                                D.jsx
                                                                                                                                                                                            )(
                                                                                                                                                                                                Fe.a,
                                                                                                                                                                                                {
                                                                                                                                                                                                    titleAccess:
                                                                                                                                                                                                        'Remove From Resume',
                                                                                                                                                                                                    onClick:
                                                                                                                                                                                                        function (
                                                                                                                                                                                                            n
                                                                                                                                                                                                        ) {
                                                                                                                                                                                                            return ce(
                                                                                                                                                                                                                0,
                                                                                                                                                                                                                e,
                                                                                                                                                                                                                t,
                                                                                                                                                                                                                'sidebar'
                                                                                                                                                                                                            );
                                                                                                                                                                                                        },
                                                                                                                                                                                                }
                                                                                                                                                                                            ),
                                                                                                                                                                                    }
                                                                                                                                                                                ),
                                                                                                                                                                                Object(
                                                                                                                                                                                    D.jsx
                                                                                                                                                                                )(
                                                                                                                                                                                    'span',
                                                                                                                                                                                    {
                                                                                                                                                                                        className:
                                                                                                                                                                                            e.copy
                                                                                                                                                                                                ? 'delete-component'
                                                                                                                                                                                                : 'd-none',
                                                                                                                                                                                        children:
                                                                                                                                                                                            Object(
                                                                                                                                                                                                D.jsx
                                                                                                                                                                                            )(
                                                                                                                                                                                                qe.a,
                                                                                                                                                                                                {
                                                                                                                                                                                                    onClick:
                                                                                                                                                                                                        function (
                                                                                                                                                                                                            e
                                                                                                                                                                                                        ) {
                                                                                                                                                                                                            return se(
                                                                                                                                                                                                                0,
                                                                                                                                                                                                                0,
                                                                                                                                                                                                                t,
                                                                                                                                                                                                                'sidebar'
                                                                                                                                                                                                            );
                                                                                                                                                                                                        },
                                                                                                                                                                                                }
                                                                                                                                                                                            ),
                                                                                                                                                                                    }
                                                                                                                                                                                ),
                                                                                                                                                                            ],
                                                                                                                                                                    }
                                                                                                                                                                )
                                                                                                                                                            );
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                                e.name
                                                                                                                                            );
                                                                                                                                        }
                                                                                                                                    ),
                                                                                                                                    e.placeholder,
                                                                                                                                ],
                                                                                                                        }
                                                                                                                    )
                                                                                                                );
                                                                                                            },
                                                                                                    }),
                                                                                                })
                                                                                              : null,
                                                                                      ],
                                                                                  }),
                                                                              ],
                                                                          }),
                                                                      }),
                                                                      Object(D.jsx)(d.a, {
                                                                          sx: { height: 30 },
                                                                          id: 'resumePageSeparator',
                                                                      }),
                                                                      h
                                                                          ? Object(D.jsx)(_.a, {
                                                                                className:
                                                                                    'resume-paper heading-alignment-'
                                                                                        .concat(
                                                                                            z.headingAlignment,
                                                                                            ' heading-font-'
                                                                                        )
                                                                                        .concat(
                                                                                            z.headingFontSize,
                                                                                            ' subheading-font-'
                                                                                        )
                                                                                        .concat(
                                                                                            z.subheadingFontSize,
                                                                                            ' body-font-'
                                                                                        )
                                                                                        .concat(z.bodyFontSize),
                                                                                sx: {
                                                                                    fontSize: z.bodyFontSize,
                                                                                    color: z.bodyFontColor,
                                                                                },
                                                                                elevation: 3,
                                                                                children: Object(D.jsx)('div', {
                                                                                    id: 'pageTwo',
                                                                                    children: Object(D.jsx)(Y.a, {
                                                                                        item: !0,
                                                                                        xs: 12,
                                                                                        className: ''.concat(
                                                                                            b.header.length > 0
                                                                                                ? ''
                                                                                                : 'padding'
                                                                                        ),
                                                                                        children: Object(D.jsx)(Z.c, {
                                                                                            droppableId: 'pageTwo',
                                                                                            children: function (e, t) {
                                                                                                return Object(D.jsx)(
                                                                                                    'div',
                                                                                                    Object(U.a)(
                                                                                                        Object(U.a)(
                                                                                                            {
                                                                                                                ref: e.innerRef,
                                                                                                            },
                                                                                                            e.droppableProps
                                                                                                        ),
                                                                                                        {},
                                                                                                        {
                                                                                                            className:
                                                                                                                t.isDraggingOver
                                                                                                                    ? 'resume-paper-content-draggin-over'
                                                                                                                    : 'resume-paper-content',
                                                                                                            children:
                                                                                                                Object(
                                                                                                                    D.jsxs
                                                                                                                )(
                                                                                                                    a.Suspense,
                                                                                                                    {
                                                                                                                        fallback:
                                                                                                                            Object(
                                                                                                                                D.jsx
                                                                                                                            )(
                                                                                                                                'div',
                                                                                                                                {
                                                                                                                                    children:
                                                                                                                                        'Loading',
                                                                                                                                }
                                                                                                                            ),
                                                                                                                        children:
                                                                                                                            [
                                                                                                                                b.pageTwo.map(
                                                                                                                                    function (
                                                                                                                                        e,
                                                                                                                                        t
                                                                                                                                    ) {
                                                                                                                                        return Object(
                                                                                                                                            D.jsx
                                                                                                                                        )(
                                                                                                                                            Z.b,
                                                                                                                                            {
                                                                                                                                                draggableId:
                                                                                                                                                    e.name,
                                                                                                                                                index: t,
                                                                                                                                                children:
                                                                                                                                                    function (
                                                                                                                                                        n,
                                                                                                                                                        c
                                                                                                                                                    ) {
                                                                                                                                                        return Object(
                                                                                                                                                            a.createElement
                                                                                                                                                        )(
                                                                                                                                                            'div',
                                                                                                                                                            Object(
                                                                                                                                                                U.a
                                                                                                                                                            )(
                                                                                                                                                                Object(
                                                                                                                                                                    U.a
                                                                                                                                                                )(
                                                                                                                                                                    {
                                                                                                                                                                        className:
                                                                                                                                                                            c.isDragging
                                                                                                                                                                                ? 'resume-section-wrap component-dragging'
                                                                                                                                                                                : 'resume-section-wrap',
                                                                                                                                                                        ref: n.innerRef,
                                                                                                                                                                    },
                                                                                                                                                                    n.draggableProps
                                                                                                                                                                ),
                                                                                                                                                                {},
                                                                                                                                                                {
                                                                                                                                                                    key: e.name,
                                                                                                                                                                }
                                                                                                                                                            ),
                                                                                                                                                            oe(
                                                                                                                                                                e.componentType,
                                                                                                                                                                e,
                                                                                                                                                                'pageTwo'
                                                                                                                                                            ),
                                                                                                                                                            Object(
                                                                                                                                                                D.jsxs
                                                                                                                                                            )(
                                                                                                                                                                'div',
                                                                                                                                                                {
                                                                                                                                                                    className:
                                                                                                                                                                        'overlay',
                                                                                                                                                                    children:
                                                                                                                                                                        [
                                                                                                                                                                            Object(
                                                                                                                                                                                D.jsx
                                                                                                                                                                            )(
                                                                                                                                                                                'span',
                                                                                                                                                                                Object(
                                                                                                                                                                                    U.a
                                                                                                                                                                                )(
                                                                                                                                                                                    Object(
                                                                                                                                                                                        U.a
                                                                                                                                                                                    )(
                                                                                                                                                                                        {
                                                                                                                                                                                            className:
                                                                                                                                                                                                'drag-handle',
                                                                                                                                                                                        },
                                                                                                                                                                                        n.dragHandleProps
                                                                                                                                                                                    ),
                                                                                                                                                                                    {},
                                                                                                                                                                                    {
                                                                                                                                                                                        children:
                                                                                                                                                                                            Object(
                                                                                                                                                                                                D.jsx
                                                                                                                                                                                            )(
                                                                                                                                                                                                Me.a,
                                                                                                                                                                                                {
                                                                                                                                                                                                    titleAccess:
                                                                                                                                                                                                        'Grab & Move',
                                                                                                                                                                                                }
                                                                                                                                                                                            ),
                                                                                                                                                                                    }
                                                                                                                                                                                )
                                                                                                                                                                            ),
                                                                                                                                                                            Object(
                                                                                                                                                                                D.jsx
                                                                                                                                                                            )(
                                                                                                                                                                                'span',
                                                                                                                                                                                {
                                                                                                                                                                                    className:
                                                                                                                                                                                        'copy-component',
                                                                                                                                                                                    children:
                                                                                                                                                                                        Object(
                                                                                                                                                                                            D.jsx
                                                                                                                                                                                        )(
                                                                                                                                                                                            De.a,
                                                                                                                                                                                            {
                                                                                                                                                                                                titleAccess:
                                                                                                                                                                                                    'Copy',
                                                                                                                                                                                                onClick:
                                                                                                                                                                                                    function (
                                                                                                                                                                                                        n
                                                                                                                                                                                                    ) {
                                                                                                                                                                                                        return ae(
                                                                                                                                                                                                            0,
                                                                                                                                                                                                            e,
                                                                                                                                                                                                            t,
                                                                                                                                                                                                            'pageTwo'
                                                                                                                                                                                                        );
                                                                                                                                                                                                    },
                                                                                                                                                                                            }
                                                                                                                                                                                        ),
                                                                                                                                                                                }
                                                                                                                                                                            ),
                                                                                                                                                                            Object(
                                                                                                                                                                                D.jsx
                                                                                                                                                                            )(
                                                                                                                                                                                'span',
                                                                                                                                                                                {
                                                                                                                                                                                    className:
                                                                                                                                                                                        'remove-component',
                                                                                                                                                                                    children:
                                                                                                                                                                                        Object(
                                                                                                                                                                                            D.jsx
                                                                                                                                                                                        )(
                                                                                                                                                                                            Fe.a,
                                                                                                                                                                                            {
                                                                                                                                                                                                titleAccess:
                                                                                                                                                                                                    'Remove From Resume',
                                                                                                                                                                                                onClick:
                                                                                                                                                                                                    function (
                                                                                                                                                                                                        n
                                                                                                                                                                                                    ) {
                                                                                                                                                                                                        return ce(
                                                                                                                                                                                                            0,
                                                                                                                                                                                                            e,
                                                                                                                                                                                                            t,
                                                                                                                                                                                                            'pageTwo'
                                                                                                                                                                                                        );
                                                                                                                                                                                                    },
                                                                                                                                                                                            }
                                                                                                                                                                                        ),
                                                                                                                                                                                }
                                                                                                                                                                            ),
                                                                                                                                                                            Object(
                                                                                                                                                                                D.jsx
                                                                                                                                                                            )(
                                                                                                                                                                                'span',
                                                                                                                                                                                {
                                                                                                                                                                                    className:
                                                                                                                                                                                        e.copy
                                                                                                                                                                                            ? 'delete-component'
                                                                                                                                                                                            : 'd-none',
                                                                                                                                                                                    children:
                                                                                                                                                                                        Object(
                                                                                                                                                                                            D.jsx
                                                                                                                                                                                        )(
                                                                                                                                                                                            qe.a,
                                                                                                                                                                                            {
                                                                                                                                                                                                onClick:
                                                                                                                                                                                                    function (
                                                                                                                                                                                                        e
                                                                                                                                                                                                    ) {
                                                                                                                                                                                                        return se(
                                                                                                                                                                                                            0,
                                                                                                                                                                                                            0,
                                                                                                                                                                                                            t,
                                                                                                                                                                                                            'pageTwo'
                                                                                                                                                                                                        );
                                                                                                                                                                                                    },
                                                                                                                                                                                            }
                                                                                                                                                                                        ),
                                                                                                                                                                                }
                                                                                                                                                                            ),
                                                                                                                                                                        ],
                                                                                                                                                                }
                                                                                                                                                            )
                                                                                                                                                        );
                                                                                                                                                    },
                                                                                                                                            },
                                                                                                                                            e.name
                                                                                                                                        );
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                                e.placeholder,
                                                                                                                            ],
                                                                                                                    }
                                                                                                                ),
                                                                                                        }
                                                                                                    )
                                                                                                );
                                                                                            },
                                                                                        }),
                                                                                    }),
                                                                                }),
                                                                            })
                                                                          : null,
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                      Object(D.jsxs)(Y.a, {
                                                          className: 'component-library-wrap',
                                                          item: !0,
                                                          xs: 5,
                                                          children: [
                                                              Object(D.jsx)('div', { id: 'editorPortal' }),
                                                              'globalSetting' === o
                                                                  ? Object(D.jsx)('div', {
                                                                        className: 'setting-editor-container',
                                                                        children: Object(D.jsx)(st, {
                                                                            resumeSettings: z,
                                                                            setResumeSettings: B,
                                                                            updateGlobalSetting: J,
                                                                            openEditorSection: E,
                                                                        }),
                                                                    })
                                                                  : null === o &&
                                                                    Object(D.jsxs)('div', {
                                                                        children: [
                                                                            Object(D.jsxs)('div', {
                                                                                className: 'component-library-header',
                                                                                children: [
                                                                                    Object(D.jsx)('div', {
                                                                                        children: Object(D.jsx)(
                                                                                            'span',
                                                                                            {
                                                                                                className:
                                                                                                    'component-library-title',
                                                                                                children: 'All Widgets',
                                                                                            }
                                                                                        ),
                                                                                    }),
                                                                                    Object(D.jsx)(V.a, {
                                                                                        id: 'component-library-filter',
                                                                                        options: [
                                                                                            {
                                                                                                label: 'Education',
                                                                                                id: 1,
                                                                                            },
                                                                                            { label: 'Skills', id: 2 },
                                                                                        ],
                                                                                        sx: { width: 150 },
                                                                                        renderInput: function (e) {
                                                                                            return Object(D.jsx)(
                                                                                                X.a,
                                                                                                Object(U.a)(
                                                                                                    Object(U.a)({}, e),
                                                                                                    {},
                                                                                                    {
                                                                                                        placeholder:
                                                                                                            'Filter',
                                                                                                        variant:
                                                                                                            'standard',
                                                                                                    }
                                                                                                )
                                                                                            );
                                                                                        },
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            Object(D.jsx)(_.a, {
                                                                                style: { padding: '20px' },
                                                                                className: 'widget-library',
                                                                                elevation: 0,
                                                                                children: Object(D.jsx)(Z.c, {
                                                                                    droppableId: 'componentLibrary',
                                                                                    children: function (e, t) {
                                                                                        return Object(D.jsxs)(
                                                                                            'div',
                                                                                            Object(U.a)(
                                                                                                Object(U.a)(
                                                                                                    { ref: e.innerRef },
                                                                                                    e.droppableProps
                                                                                                ),
                                                                                                {},
                                                                                                {
                                                                                                    className:
                                                                                                        t.isDraggingOver
                                                                                                            ? 'resume-paper-content-draggin-over'
                                                                                                            : 'resume-paper-content',
                                                                                                    children: [
                                                                                                        e.isDragging,
                                                                                                        Object(D.jsxs)(
                                                                                                            a.Suspense,
                                                                                                            {
                                                                                                                fallback:
                                                                                                                    Object(
                                                                                                                        D.jsx
                                                                                                                    )(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                'Loading',
                                                                                                                        }
                                                                                                                    ),
                                                                                                                children:
                                                                                                                    [
                                                                                                                        b.componentLibrary.map(
                                                                                                                            function (
                                                                                                                                e,
                                                                                                                                t
                                                                                                                            ) {
                                                                                                                                return Object(
                                                                                                                                    D.jsx
                                                                                                                                )(
                                                                                                                                    Z.b,
                                                                                                                                    {
                                                                                                                                        draggableId:
                                                                                                                                            e.name,
                                                                                                                                        index: t,
                                                                                                                                        children:
                                                                                                                                            function (
                                                                                                                                                n,
                                                                                                                                                c
                                                                                                                                            ) {
                                                                                                                                                return Object(
                                                                                                                                                    a.createElement
                                                                                                                                                )(
                                                                                                                                                    'div',
                                                                                                                                                    Object(
                                                                                                                                                        U.a
                                                                                                                                                    )(
                                                                                                                                                        Object(
                                                                                                                                                            U.a
                                                                                                                                                        )(
                                                                                                                                                            {
                                                                                                                                                                className:
                                                                                                                                                                    c.isDragging
                                                                                                                                                                        ? 'resume-section-wrap component-dragging'
                                                                                                                                                                        : 'resume-section-wrap',
                                                                                                                                                                ref: n.innerRef,
                                                                                                                                                            },
                                                                                                                                                            n.draggableProps
                                                                                                                                                        ),
                                                                                                                                                        {},
                                                                                                                                                        {
                                                                                                                                                            key: e.name,
                                                                                                                                                        }
                                                                                                                                                    ),
                                                                                                                                                    oe(
                                                                                                                                                        e.componentType,
                                                                                                                                                        e,
                                                                                                                                                        'componentLibrary'
                                                                                                                                                    ),
                                                                                                                                                    Object(
                                                                                                                                                        D.jsxs
                                                                                                                                                    )(
                                                                                                                                                        'div',
                                                                                                                                                        {
                                                                                                                                                            className:
                                                                                                                                                                'overlay',
                                                                                                                                                            children:
                                                                                                                                                                [
                                                                                                                                                                    Object(
                                                                                                                                                                        D.jsx
                                                                                                                                                                    )(
                                                                                                                                                                        'span',
                                                                                                                                                                        Object(
                                                                                                                                                                            U.a
                                                                                                                                                                        )(
                                                                                                                                                                            Object(
                                                                                                                                                                                U.a
                                                                                                                                                                            )(
                                                                                                                                                                                {
                                                                                                                                                                                    className:
                                                                                                                                                                                        'drag-handle',
                                                                                                                                                                                },
                                                                                                                                                                                n.dragHandleProps
                                                                                                                                                                            ),
                                                                                                                                                                            {},
                                                                                                                                                                            {
                                                                                                                                                                                children:
                                                                                                                                                                                    Object(
                                                                                                                                                                                        D.jsx
                                                                                                                                                                                    )(
                                                                                                                                                                                        Me.a,
                                                                                                                                                                                        {
                                                                                                                                                                                            titleAccess:
                                                                                                                                                                                                'Grab & Move',
                                                                                                                                                                                        }
                                                                                                                                                                                    ),
                                                                                                                                                                            }
                                                                                                                                                                        )
                                                                                                                                                                    ),
                                                                                                                                                                    Object(
                                                                                                                                                                        D.jsx
                                                                                                                                                                    )(
                                                                                                                                                                        'span',
                                                                                                                                                                        {
                                                                                                                                                                            className:
                                                                                                                                                                                'copy-component',
                                                                                                                                                                            children:
                                                                                                                                                                                Object(
                                                                                                                                                                                    D.jsx
                                                                                                                                                                                )(
                                                                                                                                                                                    De.a,
                                                                                                                                                                                    {
                                                                                                                                                                                        titleAccess:
                                                                                                                                                                                            'Copy',
                                                                                                                                                                                        onClick:
                                                                                                                                                                                            function (
                                                                                                                                                                                                n
                                                                                                                                                                                            ) {
                                                                                                                                                                                                return ae(
                                                                                                                                                                                                    0,
                                                                                                                                                                                                    e,
                                                                                                                                                                                                    t,
                                                                                                                                                                                                    'componentLibrary'
                                                                                                                                                                                                );
                                                                                                                                                                                            },
                                                                                                                                                                                    }
                                                                                                                                                                                ),
                                                                                                                                                                        }
                                                                                                                                                                    ),
                                                                                                                                                                    Object(
                                                                                                                                                                        D.jsx
                                                                                                                                                                    )(
                                                                                                                                                                        'span',
                                                                                                                                                                        {
                                                                                                                                                                            className:
                                                                                                                                                                                'remove-component',
                                                                                                                                                                            children:
                                                                                                                                                                                Object(
                                                                                                                                                                                    D.jsx
                                                                                                                                                                                )(
                                                                                                                                                                                    We.a,
                                                                                                                                                                                    {
                                                                                                                                                                                        titleAccess:
                                                                                                                                                                                            'Add to Resume',
                                                                                                                                                                                        onClick:
                                                                                                                                                                                            function (
                                                                                                                                                                                                n
                                                                                                                                                                                            ) {
                                                                                                                                                                                                return (function (
                                                                                                                                                                                                    e,
                                                                                                                                                                                                    t,
                                                                                                                                                                                                    n,
                                                                                                                                                                                                    a
                                                                                                                                                                                                ) {
                                                                                                                                                                                                    var c =
                                                                                                                                                                                                        JSON.parse(
                                                                                                                                                                                                            JSON.stringify(
                                                                                                                                                                                                                b
                                                                                                                                                                                                            )
                                                                                                                                                                                                        );
                                                                                                                                                                                                    c[
                                                                                                                                                                                                        a
                                                                                                                                                                                                    ].splice(
                                                                                                                                                                                                        n,
                                                                                                                                                                                                        1
                                                                                                                                                                                                    ),
                                                                                                                                                                                                        c.main.push(
                                                                                                                                                                                                            t
                                                                                                                                                                                                        ),
                                                                                                                                                                                                        p(
                                                                                                                                                                                                            c
                                                                                                                                                                                                        ),
                                                                                                                                                                                                        F(
                                                                                                                                                                                                            c
                                                                                                                                                                                                        );
                                                                                                                                                                                                })(
                                                                                                                                                                                                    0,
                                                                                                                                                                                                    e,
                                                                                                                                                                                                    t,
                                                                                                                                                                                                    'componentLibrary'
                                                                                                                                                                                                );
                                                                                                                                                                                            },
                                                                                                                                                                                    }
                                                                                                                                                                                ),
                                                                                                                                                                        }
                                                                                                                                                                    ),
                                                                                                                                                                    Object(
                                                                                                                                                                        D.jsx
                                                                                                                                                                    )(
                                                                                                                                                                        'span',
                                                                                                                                                                        {
                                                                                                                                                                            className:
                                                                                                                                                                                e.copy
                                                                                                                                                                                    ? 'delete-component'
                                                                                                                                                                                    : 'd-none',
                                                                                                                                                                            children:
                                                                                                                                                                                Object(
                                                                                                                                                                                    D.jsx
                                                                                                                                                                                )(
                                                                                                                                                                                    qe.a,
                                                                                                                                                                                    {
                                                                                                                                                                                        onClick:
                                                                                                                                                                                            function (
                                                                                                                                                                                                e
                                                                                                                                                                                            ) {
                                                                                                                                                                                                return se(
                                                                                                                                                                                                    0,
                                                                                                                                                                                                    0,
                                                                                                                                                                                                    t,
                                                                                                                                                                                                    'componentLibrary'
                                                                                                                                                                                                );
                                                                                                                                                                                            },
                                                                                                                                                                                    }
                                                                                                                                                                                ),
                                                                                                                                                                        }
                                                                                                                                                                    ),
                                                                                                                                                                ],
                                                                                                                                                        }
                                                                                                                                                    )
                                                                                                                                                );
                                                                                                                                            },
                                                                                                                                    },
                                                                                                                                    e.name
                                                                                                                                );
                                                                                                                            }
                                                                                                                        ),
                                                                                                                        e.placeholder,
                                                                                                                    ],
                                                                                                            }
                                                                                                        ),
                                                                                                    ],
                                                                                                }
                                                                                            )
                                                                                        );
                                                                                    },
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                          }),
                                      ],
                                  })
                                : Object(D.jsx)('div', {
                                      className: 'initial-loader',
                                      children: Object(D.jsx)(f.a, {}),
                                  })),
                        Object(D.jsxs)('div', {
                            className: 'builder-wrap',
                            children: [Object(D.jsx)(K.a, { className: N ? '' : 'd-none', color: 'primary' }), e],
                        })
                    );
                },
                xn = n(231),
                vn = n.n(xn),
                yn = n(232),
                Nn = n.n(yn),
                Cn = n(233),
                Sn = n.n(Cn),
                kn = n(234),
                In = n.n(kn),
                wn = n.p + 'static/media/resume-2.edfc1b35.svg',
                Dn =
                    (n(409),
                    function () {
                        var e = Object(l.d)(function (e) {
                                return e;
                            }).authReducer,
                            t = Object(a.useState)(null),
                            n = Object(M.a)(t, 2),
                            c = n[0],
                            s = n[1],
                            i = Object(a.useState)(null),
                            o = Object(M.a)(i, 2),
                            m = o[0],
                            u = o[1],
                            b = Object(a.useState)(!1),
                            p = Object(M.a)(b, 2),
                            O = p[0],
                            g = p[1],
                            h = Object(a.useState)(!1),
                            x = Object(M.a)(h, 2),
                            v = x[0],
                            y = x[1],
                            N = Object(a.useState)(''),
                            C = Object(M.a)(N, 2),
                            S = C[0],
                            k = C[1],
                            I = Object(r.g)(),
                            w = Object(l.c)();
                        Object(a.useEffect)(
                            function () {
                                e.userId && (console.log('calling resume auth effect'), P());
                            },
                            [e]
                        );
                        var P = function () {
                                w(ge(e.userId)).then(function (e) {
                                    e.payload && (s(e.payload), u(JSON.parse(e.payload.userResumes)));
                                });
                            },
                            R = function () {
                                return Math.floor(Math.random() * Date.now());
                            };
                        return Object(D.jsxs)('div', {
                            className: 'user-resumes-wrap',
                            children: [
                                Object(D.jsx)(It.a, {
                                    open: v,
                                    onClose: function () {
                                        y(!1);
                                    },
                                    scroll: 'body',
                                    children: Object(D.jsx)(Dt.a, {
                                        className: 'preview-dialog-content',
                                        children: Object(D.jsx)('img', {
                                            alt: 'Resume Preview',
                                            className: 'resume-preview',
                                            src: S,
                                        }),
                                    }),
                                }),
                                Object(D.jsxs)('div', {
                                    className: 'resume-header',
                                    children: [
                                        Object(D.jsx)('h1', { children: 'My Resumes' }),
                                        m &&
                                            m.length < 2 &&
                                            Object(D.jsx)(j.a, {
                                                startIcon: Object(D.jsx)(Be.a, {}),
                                                size: 'small',
                                                onClick: function () {
                                                    g(!0);
                                                    var t = R();
                                                    e.userId &&
                                                        w(ve({ data: m, userData: c, uniqueId: t })).then(function (e) {
                                                            u(e.payload), g(!1), I.push('builder/'.concat(t));
                                                        });
                                                },
                                                variant: 'contained',
                                                color: 'primary',
                                                disableElevation: !0,
                                                className: 'header-create-resume-button',
                                                children: 'New Resume',
                                            }),
                                    ],
                                }),
                                Object(D.jsx)(K.a, { className: O ? '' : 'd-none', color: 'primary' }),
                                m
                                    ? m.length > 0
                                        ? Object(D.jsx)('div', {
                                              className: 'user-resume-list-wrap',
                                              children: m.map(function (t, n) {
                                                  return Object(D.jsxs)(
                                                      'div',
                                                      {
                                                          className: 'resume-item',
                                                          children: [
                                                              Object(D.jsx)('div', {
                                                                  className: 'resume-thumbnail',
                                                                  style: {
                                                                      backgroundImage: 'url('.concat(
                                                                          t.resumeImage,
                                                                          ')'
                                                                      ),
                                                                  },
                                                                  children: ' ',
                                                              }),
                                                              Object(D.jsxs)('div', {
                                                                  className: 'resume-actions',
                                                                  children: [
                                                                      Object(D.jsx)('div', {
                                                                          className: 'resume-action-item name',
                                                                          children: Object(D.jsx)('span', {
                                                                              children: t.resumeName,
                                                                          }),
                                                                      }),
                                                                      Object(D.jsx)('div', {
                                                                          className: 'resume-action-item date',
                                                                          children: Object(D.jsx)('span', {
                                                                              children: 'Feb 2, 2020 2.45 PM',
                                                                          }),
                                                                      }),
                                                                      Object(D.jsx)(d.a, { sx: { height: '40px' } }),
                                                                      Object(D.jsxs)('div', {
                                                                          className: 'resume-action-item link',
                                                                          onClick: function () {
                                                                              I.push('builder/'.concat(t.resumeId));
                                                                          },
                                                                          children: [
                                                                              Object(D.jsx)('span', {
                                                                                  className:
                                                                                      'resume-action-item-link-icon',
                                                                                  children: Object(D.jsx)(vn.a, {}),
                                                                              }),
                                                                              Object(D.jsx)('span', {
                                                                                  className:
                                                                                      'resume-action-item-link-text',
                                                                                  children: 'Edit',
                                                                              }),
                                                                          ],
                                                                      }),
                                                                      m.length < 2 &&
                                                                          Object(D.jsxs)('div', {
                                                                              className:
                                                                                  'resume-action-item link '.concat(
                                                                                      O ? 'item-disabled' : ''
                                                                                  ),
                                                                              onClick: function () {
                                                                                  var n;
                                                                                  (n = t.resumeId),
                                                                                      g(!0),
                                                                                      w(ge(e.userId)).then(function (
                                                                                          t
                                                                                      ) {
                                                                                          if (t.payload)
                                                                                              if (
                                                                                                  JSON.parse(
                                                                                                      t.payload
                                                                                                          .userResumes
                                                                                                  ).length < 2
                                                                                              ) {
                                                                                                  var a = R(),
                                                                                                      c = JSON.parse(
                                                                                                          JSON.stringify(
                                                                                                              m
                                                                                                          )
                                                                                                      ),
                                                                                                      i = c.filter(
                                                                                                          function (e) {
                                                                                                              return (
                                                                                                                  e.resumeId ===
                                                                                                                  n
                                                                                                              );
                                                                                                          }
                                                                                                      )[0];
                                                                                                  c.push({
                                                                                                      resumeId:
                                                                                                          a.toString(),
                                                                                                      resumeName:
                                                                                                          ''.concat(
                                                                                                              i.resumeName,
                                                                                                              ' (copy)'
                                                                                                          ),
                                                                                                      resumeImage:
                                                                                                          i.resumeImage,
                                                                                                  }),
                                                                                                      w(
                                                                                                          he({
                                                                                                              userId: e.userId,
                                                                                                              data: JSON.stringify(
                                                                                                                  c
                                                                                                              ),
                                                                                                          })
                                                                                                      ),
                                                                                                      w(
                                                                                                          xe({
                                                                                                              resumeId:
                                                                                                                  n,
                                                                                                              uniqueId:
                                                                                                                  a,
                                                                                                          })
                                                                                                      ).then(function (
                                                                                                          e
                                                                                                      ) {
                                                                                                          u(c), g(!1);
                                                                                                      });
                                                                                              } else
                                                                                                  g(!1),
                                                                                                      s(t.payload),
                                                                                                      u(
                                                                                                          JSON.parse(
                                                                                                              t.payload
                                                                                                                  .userResumes
                                                                                                          )
                                                                                                      );
                                                                                      });
                                                                              },
                                                                              children: [
                                                                                  Object(D.jsx)('span', {
                                                                                      className:
                                                                                          'resume-action-item-link-icon',
                                                                                      children: Object(D.jsx)(Nn.a, {}),
                                                                                  }),
                                                                                  Object(D.jsx)('span', {
                                                                                      className:
                                                                                          'resume-action-item-link-text',
                                                                                      children: 'Duplicate',
                                                                                  }),
                                                                              ],
                                                                          }),
                                                                      Object(D.jsxs)('div', {
                                                                          className: 'resume-action-item link',
                                                                          onClick: function () {
                                                                              var e;
                                                                              (e = t.resumeImage), y(!0), k(e);
                                                                          },
                                                                          children: [
                                                                              Object(D.jsx)('span', {
                                                                                  className:
                                                                                      'resume-action-item-link-icon',
                                                                                  children: Object(D.jsx)(Sn.a, {}),
                                                                              }),
                                                                              Object(D.jsx)('span', {
                                                                                  className:
                                                                                      'resume-action-item-link-text',
                                                                                  children: 'Preview',
                                                                              }),
                                                                          ],
                                                                      }),
                                                                      Object(D.jsxs)('div', {
                                                                          className: 'resume-action-item link',
                                                                          children: [
                                                                              Object(D.jsx)('span', {
                                                                                  className:
                                                                                      'resume-action-item-link-icon',
                                                                                  children: Object(D.jsx)(In.a, {}),
                                                                              }),
                                                                              Object(D.jsx)('span', {
                                                                                  className:
                                                                                      'resume-action-item-link-text',
                                                                                  children: 'Share',
                                                                              }),
                                                                          ],
                                                                      }),
                                                                      Object(D.jsxs)('div', {
                                                                          className: 'resume-action-item link',
                                                                          onClick: function () {
                                                                              !(function (t) {
                                                                                  g(!0);
                                                                                  var n = JSON.parse(
                                                                                      JSON.stringify(m)
                                                                                  ).filter(function (e) {
                                                                                      return e.resumeId !== t;
                                                                                  });
                                                                                  w(fe(t)),
                                                                                      u(n),
                                                                                      w(
                                                                                          he({
                                                                                              userId: e.userId,
                                                                                              data: JSON.stringify(n),
                                                                                          })
                                                                                      ).then(function (e) {
                                                                                          g(!1);
                                                                                      });
                                                                              })(t.resumeId);
                                                                          },
                                                                          children: [
                                                                              Object(D.jsx)('span', {
                                                                                  className:
                                                                                      'resume-action-item-link-icon',
                                                                                  children: Object(D.jsx)(qe.a, {}),
                                                                              }),
                                                                              Object(D.jsx)('span', {
                                                                                  className:
                                                                                      'resume-action-item-link-text',
                                                                                  children: 'Delete',
                                                                              }),
                                                                          ],
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      },
                                                      n
                                                  );
                                              }),
                                          })
                                        : Object(D.jsx)(Y.a, {
                                              container: !0,
                                              className: 'no-resume-wrap',
                                              spacing: 0,
                                              direction: 'column',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              children: Object(D.jsxs)(Y.a, {
                                                  container: !0,
                                                  spacing: 0,
                                                  direction: 'column',
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  item: !0,
                                                  xs: 3,
                                                  children: [
                                                      Object(D.jsx)('div', {
                                                          className: 'no-resume-text',
                                                          children: 'No resume created, please create one.',
                                                      }),
                                                      Object(D.jsx)('img', {
                                                          className: 'no-resume-img',
                                                          alt: 'Create Resume',
                                                          src: wn,
                                                      }),
                                                  ],
                                              }),
                                          })
                                    : Object(D.jsx)(Y.a, {
                                          container: !0,
                                          className: 'no-resume-wrap',
                                          spacing: 0,
                                          direction: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          children: Object(D.jsx)(f.a, {}),
                                      }),
                            ],
                        });
                    }),
                Pn = function () {
                    return Object(D.jsx)(A.a, {
                        maxWidth: 'sm',
                        children: Object(D.jsx)(d.a, {
                            m: 'auto',
                            textAlign: 'center',
                            children: Object(D.jsx)('h1', { children: 'Home' }),
                        }),
                    });
                };
            var Rn = function () {
                    var e = Object(l.d)(function (e) {
                        return e.authReducer.isSignedIn;
                    });
                    return Object(D.jsxs)(o.a, {
                        children: [
                            Object(D.jsx)(T, {}),
                            Object(D.jsxs)(r.d, {
                                children: [
                                    Object(D.jsxs)(r.b, {
                                        path: '/builder/:resumeId?',
                                        children: [
                                            (e || null !== localStorage.getItem('token')) && Object(D.jsx)(fn, {}),
                                            !e &&
                                                null == localStorage.getItem('token') &&
                                                Object(D.jsx)(r.a, { to: '/' }),
                                        ],
                                    }),
                                    Object(D.jsx)(r.b, { path: '/contact', children: Object(D.jsx)(W, {}) }),
                                    Object(D.jsx)(r.b, { path: '/about', children: Object(D.jsx)(F, {}) }),
                                    Object(D.jsxs)(r.b, {
                                        exact: !0,
                                        path: '/resumes',
                                        children: [
                                            (e || null !== localStorage.getItem('token')) && Object(D.jsx)(Dn, {}),
                                            !e &&
                                                null == localStorage.getItem('token') &&
                                                Object(D.jsx)(r.a, { to: '/' }),
                                        ],
                                    }),
                                    Object(D.jsx)(r.b, { exact: !0, path: '/', children: Object(D.jsx)(Pn, {}) }),
                                ],
                            }),
                        ],
                    });
                },
                zn = n(478),
                Bn = n(166),
                Tn = Object(Bn.a)({
                    palette: { primary: { main: '#09915A' } },
                    components: {
                        MuiButton: {
                            variants: [
                                {
                                    props: { variant: 'space-40', color: 'primary' },
                                    style: { paddingLeft: '40px', paddingRight: '40px' },
                                },
                            ],
                        },
                    },
                }),
                An = Object(x.a)({
                    reducer: { authReducer: k, userDataReducer: Ne, resumeDataReducer: oe, resumeSettingsReducer: ue },
                });
            i.a.render(
                Object(D.jsx)(l.a, {
                    store: An,
                    children: Object(D.jsx)(zn.a, { theme: Tn, children: Object(D.jsx)(Rn, {}) }),
                }),
                document.getElementById('root')
            );
        },
    },
    [[410, 1, 2]],
]);
//# sourceMappingURL=main.3bcd3bea.chunk.js.map
