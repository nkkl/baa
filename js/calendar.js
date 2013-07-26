var answers = {
	StartTime: 	[],
	EndTime: 	[],
	Title: 		[],
	Place: 		[]
}

// parse JSON and add answers to array
$.getJSON("https://spreadsheets.google.com/feeds/list/0AiE7hdFAKPqldEFxS0ZrVXZCMnNXYmwxRks1TklRY1E/od6/public/values?alt=json",
	function(data) {
		for (i=0;i<data.feed.entry.length;i++) {
			var entry = data.feed.entry[i];

			answers.StartTime.push( entry["gsx$starttime"].$t );
			answers.EndTime.push( entry["gsx$endtime"].$t );
			answers.Title.push( entry["gsx$title"].$t );
			answers.Place.push( entry["gsx$location"].$t );
		}

	console.log(answers);
});
