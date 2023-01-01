import { useRouter } from 'next/router';
import { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const goToSignUp = () => {
    router.push('/signUp');
  };

  const googleLogin = async() => {
    router.push('/');
    
  }



  const signIn = async() => {
    try {
    router.push('/');
  
  
    }  catch (error) {
      window.alert('아이디 및 비밀번호가 틀립니다')
    };
  };

  return (
    <div style={{"width": "20%"}}>
        <div class="left-sidebar--sticky-container js-sticky-leftnav">
            <nav role="navigation">
                <ol class="nav-links">
                    <div style={{"display": "flex"}}>
                        <ol class="nav-links" style={{"display": "flex", "flex-wrap": "wrap", "flex-direction": "column"}}>
                            <button class="ps-relative" aria-current="false">
                                <a
                                    href="/"
                                    class="pl8 js-gps-track nav-links--link"
                                    data-gps-track="top_nav.click({is_current: false, location:0, destination:8})"
                                    aria-controls=""
                                    data-controller=""
                                    data-s-popover-placement="right"
                                    aria-current="false"
                                    data-s-popover-auto-show="true"
                                    data-s-popover-hide-on-outside-click="never"
                                >
                                    <div class="d-flex ai-center"><div class="flex--item truncate">Home</div></div>
                                </a>
                            </button>
                            <button class="ps-relative" aria-current="false">
                                <a
                                    id="nav-questions"
                                    href="/AllQuestions"
                                    class="pl8 js-gps-track nav-links--link -link__with-icon"
                                    data-gps-track="top_nav.click({is_current: false, location:0, destination:1})"
                                    aria-controls=""
                                    data-controller=""
                                    data-s-popover-placement="right"
                                    aria-current="false"
                                    data-s-popover-auto-show="true"
                                    data-s-popover-hide-on-outside-click="never"
                                >
                                    <svg aria-hidden="true" class="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18">
                                        <path
                                            d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"
                                        ></path>
                                    </svg>
                                    <span class="-link--channel-name">Questions</span>
                                </a>
                            </button>
                            <button class="ps-relative" aria-current="false">
                                <a
                                    id="nav-tags"
                                    href="/AskQuestion"
                                    class="js-gps-track nav-links--link"
                                    data-gps-track="top_nav.click({is_current: false, location:0, destination:2})"
                                    aria-controls=""
                                    data-controller=""
                                    data-s-popover-placement="right"
                                    aria-current="false"
                                    data-s-popover-auto-show="true"
                                    data-s-popover-hide-on-outside-click="never"
                                >
                                    <div class="d-flex ai-center"><div class="flex--item truncate">AskQuestion</div></div>
                                </a>
                            </button>
                            <button class="ps-relative" aria-current="false">
                                <a
                                    id="nav-users"
                                    href="/users"
                                    class="js-gps-track nav-links--link"
                                    data-gps-track="top_nav.click({is_current: false, location:0, destination:3})"
                                    aria-controls=""
                                    data-controller=""
                                    data-s-popover-placement="right"
                                    aria-current="false"
                                    data-s-popover-auto-show="true"
                                    data-s-popover-hide-on-outside-click="never"
                                >
                                    <div class="d-flex ai-center"><div class="flex--item truncate">Users</div></div>
                                </a>
                            </button>
                            <button class="ps-relative" aria-current="false">
                                <a
                                    id="nav-companies"
                                    href="https://stackoverflow.com/jobs/companies?so_medium=stackoverflow&amp;so_source=SiteNav"
                                    class="js-gps-track nav-links--link"
                                    data-gps-track="top_nav.click({is_current: false, location:0, destination:12})"
                                    aria-controls=""
                                    data-controller=""
                                    data-s-popover-placement="right"
                                    aria-current="false"
                                    data-s-popover-auto-show="true"
                                    data-s-popover-hide-on-outside-click="never"
                                >
                                    <div class="d-flex ai-center"><div class="flex--item truncate">Companies</div></div>
                                </a>
                            </button>
                            <button class="d-flex ml8 mt16 jc-space-between">
                                <div class="flex--item tt-uppercase tt-uppercase fs-fine fc-light">Collectives</div>
                                <div class="flex--item fs-fine fc-light">
                                    <a
                                        href="javascript:void(0)"
                                        class="s-link s-link__inherit mr8 js-gps-track js-collectives-navcta-toggle"
                                        role="button"
                                        aria-controls="popover-discover-collectives"
                                        data-controller="s-popover"
                                        data-action="s-popover#toggle"
                                        data-s-popover-placement="top"
                                        data-s-popover-toggle-class="is-selected"
                                        data-gps-track="top_nav.click({is_current:false, location:0, destination:17})"
                                        aria-expanded="false"
                                    >
                                        <svg aria-hidden="true" class="svg-icon iconInfoSm" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z"></path></svg>
                                    </a>
                                </div>
                            </button>
                            <button class="ps-relative youarehere" aria-current="true">
                                <a
                                    id="nav-collective-discover"
                                    href="/collectives"
                                    class="pl8 ai-center js-collectives-navcta-toggle js-gps-track nav-links--link -link__with-icon"
                                    data-gps-track="top_nav.click({is_current: true, location:0, destination:18})"
                                    aria-controls=""
                                    data-controller=""
                                    data-s-popover-placement="right"
                                    aria-current="page"
                                    data-s-popover-auto-show="true"
                                    data-s-popover-hide-on-outside-click="never"
                                >
                                    <svg aria-hidden="true" class="mt-auto fc-orange-400 svg-icon iconStarVerified" width="18" height="18" viewBox="0 0 18 18">
                                        <path
                                            d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"
                                        ></path>
                                    </svg>
                                    <span class="-link--channel-name">Explore Collectives</span>
                                </a>
                            </button>
                        </ol>
                    </div>
                </ol>
            </nav>
        </div>


        <div class="s-popover ws2" id="popover-discover-collectives" role="menu">
            <div class="s-popover--arrow"></div>
            <div>
                <svg aria-hidden="true" class="fc-orange-500 float-right ml24 svg-spot spotCollective" width="48" height="48" viewBox="0 0 48 48"><path d="M25.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM14 18.25c0-.69.56-1.25 1.25-1.25h22.5c.69 0 1.25.56 1.25 1.25V37.5a1 1 0 0 1-1.6.8l-4.07-3.05a1.25 1.25 0 0 0-.75-.25H15.25c-.69 0-1.25-.56-1.25-1.25v-15.5ZM7 24.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM25.5 48a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM48 24.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" opacity=".2"></path><path d="M21 3.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM24.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM0 23.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM3.5 22a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM21 44.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm20-23a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM43 23.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-23.23-3.14a1 1 0 0 1-.13 1.4l-2.08 1.74 2.08 1.73a1 1 0 1 1-1.28 1.54l-2.42-2.02a1.63 1.63 0 0 1 0-2.5l2.42-2.02a1 1 0 0 1 1.4.13Zm7.59 1.41a1 1 0 1 1 1.28-1.54l2.42 2.02c.78.65.78 1.85 0 2.5l-2.42 2.02a1 1 0 1 1-1.28-1.54l2.08-1.73-2.08-1.73ZM24.12 18a1 1 0 0 1 .87 1.12l-1 8a1 1 0 1 1-1.98-.24l1-8a1 1 0 0 1 1.11-.87Zm-11.87-5C11.01 13 10 14 10 15.25v15.5c0 1.24 1 2.25 2.25 2.25h17.33c.06 0 .11.02.15.05l4.07 3.05a2 2 0 0 0 3.2-1.6V15.25c0-1.24-1-2.25-2.25-2.25h-22.5ZM12 15.25c0-.14.11-.25.25-.25h22.5c.14 0 .25.11.25.25V34.5l-4.07-3.05a2.2 2.2 0 0 0-1.35-.45H12.25a.25.25 0 0 1-.25-.25v-15.5Zm7.24-10.68a1 1 0 1 0-.48-1.94A22.04 22.04 0 0 0 2.91 17.7a1 1 0 1 0 1.92.58 20.04 20.04 0 0 1 14.4-13.72Zm11.05-1.66a1 1 0 0 0-.58 1.92c6.45 1.92 11.54 7 13.46 13.46a1 1 0 1 0 1.92-.58 22.05 22.05 0 0 0-14.8-14.8ZM4.57 28.76a1 1 0 0 0-1.94.48 22.03 22.03 0 0 0 16.13 16.13 1 1 0 1 0 .48-1.94A20.03 20.03 0 0 1 4.57 28.76Zm40.8.48a1 1 0 1 0-1.94-.48 20.04 20.04 0 0 1-13.72 14.41 1 1 0 0 0 .58 1.92 22.04 22.04 0 0 0 15.08-15.85Z"></path></svg>
                <h5 class="pt4 fw-bold">Collectives™ on Stack Overflow</h5>
                <p class="my16 fs-caption fc-medium">Find centralized, trusted content and collaborate around the technologies you use most.</p>
                <a href="/collectives" class="js-gps-track s-btn s-btn__primary s-btn__xs" data-gps-track="top_nav.click({is_current:false, location:0, destination:18})">
                    Learn more about Collectives
                </a>
            </div>
        </div>


        <div class="s-popover ws2" id="popover-teams-create-cta" role="menu" aria-hidden="true">
            <div class="s-popover--arrow"></div>

            <div class="ps-relative overflow-hidden">
                <p class="mb2"><strong>Teams</strong></p>
                <p class="mb12 fs-caption fc-black-400">Q&amp;A for work</p>
                <p class="mb12 fs-caption fc-medium">Connect and share knowledge within a single location that is structured and easy to search.</p>
                <a href="https://stackoverflow.co/teams" class="js-gps-track s-btn s-btn__primary s-btn__xs" data-gps-track="teams.create.left-sidenav.click({ Action: CtaClick })" data-ga="[&quot;teams left navigation&quot;,&quot;left nav cta&quot;,&quot;stackoverflow.com/teams&quot;,null,null]">
                    Learn more about Teams
                </a>
            </div>
        </div>
    </div>
  );
};



export default SignIn;
