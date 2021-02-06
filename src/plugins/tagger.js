// convenience function for google analytics tagging

export default function track(_this, label) {
    _this.$gtag.event('select_content', {
      'event_category': 'engagement',
      'event_label': label,
      'value': 1
    });
}