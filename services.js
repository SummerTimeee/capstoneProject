$(function () {
    $('#accordion > li').hover(
        function () {
            var $this = $(this);
            $this.stop().animate({ 'width': '380px' }, 1800);
            $('.heading', $this).stop(true, true).fadeOut();
            $('.bgDescription', $this).stop(true, true).slideDown(500);
            $('.description', $this).stop(true, true).fadeIn();
        },
        function () {
            var $this = $(this);
            $this.stop().animate({ 'width': '90px' }, 1800);
            $('.heading', $this).stop(true, true).fadeIn();
            $('.description', $this).stop(true, true).fadeOut(1500);
            $('.bgDescription', $this).stop(true, true).slideUp(700);
        }
    );
});
