<template>
<ClientOnly>
<!-- Ticket Tailor Widget. Paste this into your website where you want the widget to appear. Do not change the code or the widget may not work properly. -->
<div class="tt-widget">
    <div class="tt-widget-fallback">
        <a href="https://www.tickettailor.com/checkout/new-session/store/60341/chk/dc90?ref=website_store_widget" target="_blank">Click here to buy swag if loading fails..</a>
    </div>
    <component is="script"
        async="true"
        src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
        data-url="https://www.tickettailor.com/checkout/new-session/store/60341/chk/dc90?ref=website_store_widget"
        data-inline-minimal="true"
        data-inline-show-logo="false"
        data-inline-bg-fill="true"
        data-inline-inherit-ref-from-url-param=""
        data-inline-ref="website_store_widget">
    </component>
</div><!-- End of Ticket Tailor Widget -->
</clientOnly>
<a href="https://www.tickettailor.com/checkout/new-session/store/60341/chk/dc90?ref=website_store_widget" target="_blank">Click here to open shop if widget loading fails..</a>
</template>