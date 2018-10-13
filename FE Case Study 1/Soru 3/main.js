$(document).ready(function(){
    $('.menu:not(.sub) > .menu-item').each(function(){
        var $menuItem = $(this);
        var childCount = $menuItem.find('.menu.sub').children().length;

        $menuItem.find('.child-count').text(childCount == 0 ? '' : childCount);
    });

    $(document).on('click', '.menu:not(.sub) > .menu-item', function(){
        var $this = $(this);
        var isSelected = $this.hasClass('selected');

        $('.menu .menu-item').removeClass('selected');

        if(isSelected) return false;

        $this.addClass('selected');
    });
});