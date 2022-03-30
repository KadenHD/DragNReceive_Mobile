import { createAnimation } from "@ionic/vue";

export const customAnimation = (baseEl, opts) => {
    const { enteringEl, leavingEl } = opts;

    const enteringPage = createAnimation('entering-page-animation')
        .addElement(enteringEl)
        .duration(300)
        .fromTo('transform', 'translateX(800px)', 'translateX(0px)')
        .fromTo('opacity', '0', '1');

    const leavingPage = createAnimation('leaving-page-animation')
        .addElement(leavingEl)
        .duration(300)
        .fromTo('transform', 'translateX(0px)', 'translateX(800px)')
        .fromTo('opacity', '1', '0');

    return createAnimation('root-transition')
        .duration(500)
        .easing('ease-in-out')
        .addAnimation([enteringPage, leavingPage]);
}

export default customAnimation;

