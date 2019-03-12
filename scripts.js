function showSearch() {
    var showit = document.querySelector('.search-bar');
    var hideit = document.querySelector('.nav');
    var search = document.getElementById('search-text');

    hideit.classList.add('hide');
    hideit.classList.remove('show');	

    showit.classList.add('show');
    showit.classList.remove('hide')

    search.focus();
}

 function showNav() {
    var showit = document.querySelector('.nav');
    var hideit = document.querySelector('.search-bar');
    var search = document.getElementById('search-text');

    hideit.classList.add('hide');
    hideit.classList.remove('show');	

    showit.classList.add('show');
    showit.classList.remove('hide')

    search.value = '';
}

function remove() {
    document.write('you Clicked the post div');
}


function showCreatePoll() {
	document.getElementById("pollbtn").classList.add('activebtn');
	document.getElementById("discussionbtn").classList.remove('activebtn');
	document.getElementById("postbtn").classList.remove('activebtn');
	document.getElementById('create-poll').style.display = "block";
	document.getElementById('create-post').style.display = "none";
	document.getElementById('create-discussion').style.display = "none";
}

function showCreatePost() {
	document.getElementById("postbtn").classList.add('activebtn');
	document.getElementById("pollbtn").classList.remove('activebtn');
	document.getElementById("discussionbtn").classList.remove('activebtn');
	document.getElementById('create-post').style.display = "block";
	document.getElementById('create-poll').style.display = "none";
	document.getElementById('create-discussion').style.display = "none";
}

function showCreatDiscussion() {
	document.getElementById("discussionbtn").classList.add('activebtn');
	document.getElementById("pollbtn").classList.remove('activebtn');
	document.getElementById("postbtn").classList.remove('activebtn');
	document.getElementById('create-poll').style.display = "none";
	document.getElementById('create-post').style.display = "none";
	document.getElementById('create-discussion').style.display = "block";
}
