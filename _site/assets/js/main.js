//js main
function showArticles() {
	var bt = $('#bt-show-articles'),
		elAside = $('#aside'),
		elArticles = $('#articles-list'),
		elContent = $('#content'),
		active = 'active';

	bt.on('click', function(e) {
		e.preventDefault();

		if( !$(this).hasClass(active) ) {
			elAside.addClass(active);

			$(this).addClass(active);

			elArticles.removeClass('vh');
			elArticles.addClass(active);
			
			elContent.addClass(active);
		} else {
			elAside.removeClass(active);

			$(this).removeClass(active);

			elArticles.removeClass(active);
			elArticles.delay(500).addClass('vh');
			
			elContent.removeClass(active);
		}
	});
}

//menu redirection
function mobileNav() {
	$('#mb-menu').change(function() {
		window.location = $(this).find("option:selected").val();
	});
}

//Load github repos
function loadRepos() {
	var data_repos = '[data-repo]';
	$(data_repos).github();
}

$(function () {
	mobileNav();
	showArticles();
	loadRepos();
});
//end