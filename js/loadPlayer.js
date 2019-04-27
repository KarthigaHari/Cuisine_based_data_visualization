
const callback = (country) => {
    const playerCard = $('#playerData');
    playerCard.show();
    document.querySelector('#playerData').scrollIntoView({
        behavior: 'smooth'
    });

    $('#countryName').html(country.properties.name);
    populatePlayerList(country.data);
	// console.log(country);
};

const populatePlayerList = (data) => {
	const playerList = $('#playerList');
    const playerListEl = $('#playerListEl');

    playerList.empty();

    Object.keys(data).forEach(playerName => {
	    let listEl = playerListEl.clone();
        listEl.show();
        listEl.removeAttr('id');
        listEl.find('.playerName').html(playerName);
        listEl.find('.playerWins').html(data[playerName].length);
        listEl.data('data', data[playerName]);
        playerList.append(listEl);
    });
	activatePlayer($('#playerList a:first-child'));
};
const populateOpponentList = (el) => {
	const playerList = $('#opponentList');
    const playerListEl = $('#playerListEl1');

    //Clear list
    playerList.empty();
	const data = $(el).data('data');

	

    Object.keys(data).forEach(playerName => {
	    let listEl = playerListEl.clone();
		listEl.show();
		listEl.removeAttr('id');
		listEl.find('.opponentName').html(data[playerName].player2);
        listEl.find('.opponentWins').html(data[playerName].year);
        listEl.data('data', data[playerName]);
        playerList.append(listEl);
		
    });

};

const activatePlayer = (el) => {
	$('#radarChart').hide();
	$('#txt').show();
    
	$('#playerList a.active').removeClass('active');
    $(el).addClass('active');
    const playerName = $(el).find('.playerName').html();
	populateOpponentList(el);
};

const activateOpponent = (el) => {
	$('#txt').hide();
	$('#radarChart').show();
    $('#opponentList a.active').removeClass('active');
    $(el).addClass('active');
	
	//console.log($(el).data('data'));
	plotGraph($(el).data('data'));
};
