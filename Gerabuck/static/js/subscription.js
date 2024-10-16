function choosePlan(planName, planPrice) {
    const url = `checkout.html?plan=${planName}&price=${planPrice}`;
    navigateTo(url);
}