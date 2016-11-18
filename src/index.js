function loadIt(){
  var pageReq = $('#pageReq').val();
  if (pageReq === '' || pageReq === 'reddit') {
    alert('Page not found');
  } else {
  $.getJSON("https://www.reddit.com/r/" + pageReq + ".json",
  function foo(data){
    var group = $('<div class="group '+pageReq.toLowerCase()+'"></div>');
    $('.headerdes').empty().append($('<h1></h1>').text(pageReq.toUpperCase()));
    $.each(
      data.data.children.slice(0, 10),
      function (req, post) {
        var subgroup = $('<div class="subgroup col-sm-4"></div>')
        subgroup.append($('<img/>').attr('src', post.data.thumbnail));
        subgroup.append($('<br>' + '<a class="title"></a>' ).attr('href', post.data.url).text(post.data.title));
        subgroup.append($('<h4></h4>').text('Likes: '+ post.data.ups));
        subgroup.append('<hr>');
        group.append(subgroup);

      })
      $('.content').empty().append(group);

    }, function(){ alert("Please retry your search"); })
  }
  }
  $('#loadReq').on('click', loadIt);
