<template>
<ClientOnly>
<!-- Ticket Tailor Widget. Paste this into your website where you want the widget to appear. Do not change the code or the widget may not work properly. -->
<div class="tt-widget">
    <div class="tt-widget-fallback">
        <a href="https://www.tickettailor.com/all-tickets-by-event/420/?ref=website_widget&show_event_filter=false" target="_blank">Click here to buy tickets if loading fails...</a>
    </div>
    <component is="script"
        async="true"
        src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
        data-url="https://www.tickettailor.com/checkout/new-session/id/7213430/chk/bcaf/?ref=website_widget&show_event_filter=false&show_header=false"
        data-type="inline"
        data-inline-minimal="true"
        data-inline-show-logo="false"
        data-inline-bg-fill="true"
        data-inline-inherit-ref-from-url-param=""
        data-inline-ref="website_widget">
    </component>
</div><!-- End of Ticket Tailor Widget -->
</clientOnly>
<a href="https://www.tickettailor.com/all-tickets-by-event/420/?ref=website_widget&show_event_filter=false" target="_blank">Click here to buy tickets if loading fails...</a>
</template>