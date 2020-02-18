import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Sticky Header
    $(window).scroll(() => {

      if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
      } else {
        $('.main_h').removeClass('sticky');
      }
    });

// Mobile Navigation
    $('.mobile-toggle').click(() => {
      if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
      } else {
        $('.main_h').addClass('open-nav');
      }
    });

    $('.main_h li a').click(() => {
      if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
      }
    });

// navigation scroll lijepo radi materem
    $('nav a').click(function(event) {
      const id = $(this).attr("href");
      const offset = 70;
      const target = $(id).offset().top - offset;
      $('html, body').animate({
        scrollTop: target
      }, 500);
      event.preventDefault();
    });
  }

}
