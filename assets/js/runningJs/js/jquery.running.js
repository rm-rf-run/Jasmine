/*
 * jQuery.Running.js - jQuery plugin for Running
 *
 * Copyright (c) 2007-2015 Qietu inc
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.qietu.com/p/jQuery.Running.js
 *
 * Version:  1.0.0
 *
 */
 
 (function($){
    $.fn.running = function(){
		
		
	   /*jd*/
		function n() {
			var t = $(".animateNum");
			var n = {
				top: $(window).scrollTop(),
				bottom: $(window).scrollTop() + $(window).height()
			};
			t.each(function() {
				var t = $(this).attr("data-animateTarget");
				n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimateNum({
					obj: $(this),
					target: t,
					totalTime: 1e3
				}))
			})
		};
		
		function b(){
			var t = $(".animateBar");
			var n = {
						top: $(window).scrollTop(),
						bottom: $(window).scrollTop() + $(window).height()
					};
		
			t.each(function() {
				
				var t = $(this).attr("data-animateTarget");
				n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimateBar({
					obj: $(this),
					target: t,
					totalTime: 1e3
				}))
			})	
		};
		
		function p(){
			var t = $(".animatePie");
			var n = {
						top: $(window).scrollTop(),
						bottom: $(window).scrollTop() + $(window).height()
					};
		
			t.each(function() {
				
				var t = $(this).attr("data-animateTarget");
				n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimatePie({
					obj: $(this),
					target: t,
					totalTime: 1e3
				}))
			})		
		};
		
		
		/*n(),
		b(),*/
		$(window).bind("scroll",
		function() {
			n();
			b();
			p();
			
		});
			
		function AnimateNum(t) {
			this.obj = t.obj,
			this.target = t.target.toString(),
			this.totalTime = t.totalTime || 1e3,
			this.init()
		};
		
		function AnimateBar(t) {
			this.obj = t.obj,
			this.target = t.target.toString(),
			this.totalTime = t.totalTime || 1e3,
			this.init()
		};
		
		function AnimatePie(t) {
			this.obj = t.obj,
			this.target = t.target.toString(),
			this.totalTime = t.totalTime || 1e3,
			this.init()
		};
		
		AnimateNum.prototype = {
			init: function() {
				return this.target ? (this.animation(), void 0) : !1
			},
			animation: function() {
				var t = this,
				i = this.target.indexOf("."),
				e = 0;
				i >= 0 && (e = this.target.length - i - 1);
				var n = this.target.replace(".", ""),
				s = this.totalTime / 30 | 0,
				a = n / s | 0,
				r = 0,
				h = 0;
				t.timer = setInterval(function() {
					r++,
					h += a,
					t.obj.html(h / Math.pow(10, e)),
					r >= s && (clearInterval(t.timer), t.obj.html(t.target))
				},
				30)
			}
		};
		
		AnimateBar.prototype = {
			init: function() {
				return this.target ? (this.animation(), void 0) : !1
			},
			animation: function() {
				var t = this,
				i = this.target.indexOf("."),
				e = 0;
				i >= 0 && (e = this.target.length - i - 1);
				var n = this.target.replace(".", ""),
				s = this.totalTime / 30 | 0,
				a = n / s | 0,
				r = 0,
				h = 0;
				t.timer = setInterval(function() {
					r++,
					h += a,
					t.obj.css('width',h / Math.pow(10, e) + '%'),
					r >= s && (clearInterval(t.timer), t.obj.animate({'width':t.target + '%'}))
				},
				30)
			}
		};
		
		AnimatePie.prototype = {
			init: function() {
				return this.target ? (this.animation(), void 0) : !1
			},
			animation: function() {
				var t = this;
				/*i = this.target.indexOf("."),
				e = 0;
				i >= 0 && (e = this.target.length - i - 1);
				var n = this.target.replace(".", ""),
				s = this.totalTime / 30 | 0,
				a = n / s | 0,
				r = 0,
				h = 0;
				t.timer = setInterval(function() {
					r++,
					h += a,
					t.obj.find('.pieInner span').html(h / Math.pow(10, e)),
					r >= s && (clearInterval(t.timer), t.obj.find('.pieInner span').html(t.target))
				
				},
				30)*/
				
				s = this.totalTime / 60 | 0;
				r = 0;
				
				t.i=0;
				t.count=0;
				t.j = 0;
				
				num = t.target;
				 
				function start1(){
				
				t.obj.find('.pieInner span').html(t.i +1);
					if(num==0) return false;
					t.i = t.i + 1;
					
				 
					
				
					if(t.i==num){
							clearInterval(t.t1);
						}
				
					if(t.i == 50){ 
						
						clearInterval(t.t1);
						num2 = num-50;
						t.t2 = setInterval(start2,1);
					};
					
					t.obj.find(".pieLeftInner").css("-o-transform","rotate(" + t.i*3.6 + "deg)");
					t.obj.find(".pieLeftInner").css("-moz-transform","rotate(" + t.i*3.6 + "deg)");
					t.obj.find(".pieLeftInner").css("-webkit-transform","rotate(" + t.i*3.6 + "deg)");
				};
				function start2(){
				
				t.obj.find('.pieInner span').html(50+t.j+1);
					if(num2==0) return false;
					t.j = t.j + 1;
					
					
					
					
					if(t.j== num2){
							clearInterval(t.t2);
						}
				
					if(t.j==50){
						
						clearInterval(t.t2); 
					};
					t.obj.find(".pieRightInner").css("-o-transform","rotate(" + t.j*3.6 + "deg)");
					t.obj.find(".pieRightInner").css("-moz-transform","rotate(" + t.j*3.6 + "deg)");
					t.obj.find(".pieRightInner").css("-webkit-transform","rotate(" + t.j*3.6 + "deg)");
				};
				
				t.t1 = setInterval(function() {
					r++;
					 
					//t.obj.css('width',h / Math.pow(10, e) + '%'),
					r >= s && (clearInterval(t.timer), start1())
				},
				30)
				//t1 = setInterval(start1,1);
	
	
			}
		};
		
	}
})(jQuery);


