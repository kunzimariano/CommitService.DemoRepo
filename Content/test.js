fromStream('mention-with')
    .whenAny(function(state, ev) {
    var re = new RegExp("[A-Z]{1,2}-[0-9]+", "");
    var matches = ev.data.commit.message.match(re);
    linkTo('asset-' + matches[0], ev);
});