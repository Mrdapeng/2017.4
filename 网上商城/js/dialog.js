/**
 * Created by Administrator on 2017/5/14.
 */

requirejs.config({
    baseurl: '../../jquery/',
    path: {
        jquery: 'jquery-1.12.4'
    }
});

define(['jquery'], function ($) {


    return {
        open: function (option) {
            var $this = this;
            var defaults = {
                width: 400,
                height: 300,
                opacity: 0.5,
                title: ''
            };
            option = $.extend(defaults, option);
            var html = '<div class="dialog-box">'
                + '<div class="content">'
                + '<div class="dialog-title">'
                + '<span class="title"></span>'
                + '<span class="dialog-close">X</span>'
                + '</div>'
                + '<div class="dialog-body">'
                + '</div>'
                + '</div>'
                + '</div>';


            $('.body').append(html);
            $('.content').css({
                width: option.width,
                height: option.height,
                marginLeft: -option.left / 2,
                marginRight: -option.right / 2
            });
            $(".dialog-box").css('background', 'rgba(0,0,0,' + option.opacity + ')');
            $('.title').html(option.title);
            $('.dialog-body').html($(option.content).clone.show());
            $('.dialog-close').on('click', function () {
                $this.close();
            });

        },
        close: function () {

            $('.dialog-box').remove();

        }

    }
});