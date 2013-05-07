
// ==UserScript==
// @name		Shorty Hertz date fixer
// @namespace	Shorty
// @description	Fixes the dates on the Hertz receipt request page
// @include		https://www.hertz.com.au/rentacar/receipts/listReceipts.do
// ==/UserScript==

var regex = /([0-9]+)\/([0-9]+)\/([0-9]+)/;
var fdhs = document.getElementsByClassName("formDateHeader");
for (var i = 0; i < fdhs.length; ++i)
{
	if (regex.test(fdhs[i].innerHTML))
	{
		var match = regex.exec(fdhs[i].innerHTML);
		fdhs[i].innerHTML = match[2] + "/" + match[1] + "/" + match[3];
	}
}

document.getElementsByClassName("ememberSectionHeaderReceipts")[0].innerHTML += " with reasonable date formatting";
