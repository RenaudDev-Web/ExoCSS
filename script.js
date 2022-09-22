$(function() {
    $('#desc li').each(function() {
        var text = this.innerHTML;
        var firstSpaceIndex = text.indexOf(" ");
        if (firstSpaceIndex > 0) {
            var substrBefore = text.substring(0,firstSpaceIndex);
            var substrAfter = text.substring(firstSpaceIndex, text.length)
            var newText = '<span style="font-weight: bold">' + substrBefore + '</span>' + substrAfter;
            this.innerHTML = newText;
        } else {
            this.innerHTML = '<span style="font-weight: bold">' + text + '</span>';
        }
    });
});