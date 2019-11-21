$(function() {
	const $step1 = $('.step_1');
	const $step2 = $('.step_2');
	const $step3 = $('.step_3');
	const $step4 = $('.step_4');


	function step3(){
		$step3.hide(650);
		$step4.show(650);
	}
	$('.accept2').on('click',function () {
		$step1.hide(650);
		$step2.show(650);
	});


	$('.back').on('click',function () {
		$step2.hide(650);
		$step1.show(650);
	});
	$('.accept1').on('click',function () {
		$step2.hide(650);
		$step3.show(650);
		setTimeout(step3, 3000);
	});
	$('.accept3').on('click',function () {
		$step4.hide(650);
		$step1.show(650);
	});
});
