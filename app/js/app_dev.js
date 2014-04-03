'use strict';

var app = angular.module('behatEditor', [
    'ngRoute',
    'ngMockE2E',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap',
    'alertServices',
    'matters_ctrl',
    'matters_services'
]);

app.run(function($httpBackend, $location, $rootScope) {

    console.log($location.path());

    var matters  = [
        {
            "id": 0,
            "name": "ad irure",
            "case_id": "a486fcdf-c679-482b-bead-3f98839f2593",
            "description": "amet incididunt in ipsum fugiat ex magna reprehenderit deserunt qui eu nulla magna officia occaecat commodo aliquip dolore in voluptate",
            "created": "1989-01-30 18:32:38",
            "location": {
                "name": "Turnling",
                "street": "5 dolor",
                "state": "Nevada",
                "city": "Soudan",
                "zip": 19624
            }
        },
        {
            "id": 1,
            "name": "elit enim",
            "case_id": "d0c1e332-41d4-4b44-97aa-131b4a3b74e8",
            "description": "voluptate voluptate Lorem culpa consectetur ea est pariatur pariatur et sint reprehenderit nostrud eu id fugiat laborum ea enim non",
            "created": "2010-11-07 20:06:12",
            "location": {
                "name": "Perkle",
                "street": "18 magna",
                "state": "South Carolina",
                "city": "Fairhaven",
                "zip": 13525
            }
        },
        {
            "id": 2,
            "name": "nisi et",
            "case_id": "766a73f2-d71f-4803-a13b-475b08af11f3",
            "description": "irure adipisicing labore enim commodo sint labore non cupidatat do eiusmod est duis labore qui ut labore non sint ut",
            "created": "2000-04-06 20:27:29",
            "location": {
                "name": "Sultrax",
                "street": "10 deserunt",
                "state": "New Hampshire",
                "city": "Sunnyside",
                "zip": 14816
            }
        },
        {
            "id": 3,
            "name": "sint veniam",
            "case_id": "c8aaea15-e64e-4870-829c-ebd27ddef8d2",
            "description": "qui qui in labore quis laboris et duis cupidatat in minim laborum occaecat ullamco sint consectetur aliqua consequat consequat et",
            "created": "2008-11-07 20:41:16",
            "location": {
                "name": "Quonk",
                "street": "1 excepteur",
                "state": "Rhode Island",
                "city": "Westboro",
                "zip": 17563
            }
        },
        {
            "id": 4,
            "name": "eiusmod elit",
            "case_id": "33d1548b-6733-411f-b61b-a8dd6637cacb",
            "description": "nostrud officia laboris culpa id aliquip reprehenderit nulla amet aliqua irure qui est sunt labore dolor Lorem non exercitation pariatur",
            "created": "2000-09-07 19:37:59",
            "location": {
                "name": "Viagreat",
                "street": "15 labore",
                "state": "Pennsylvania",
                "city": "Macdona",
                "zip": 13483
            }
        },
        {
            "id": 5,
            "name": "ex cupidatat",
            "case_id": "c664166c-8550-45eb-ac7a-3bf64225098b",
            "description": "duis incididunt consectetur est anim dolor ea duis pariatur eiusmod elit laboris ad non magna ut ad mollit occaecat ea",
            "created": "2002-06-10 19:21:08",
            "location": {
                "name": "Dreamia",
                "street": "3 tempor",
                "state": "Wyoming",
                "city": "Wheaton",
                "zip": 13265
            }
        },
        {
            "id": 6,
            "name": "magna irure",
            "case_id": "dd213692-6506-4312-bf3f-cf2cda02b096",
            "description": "occaecat est esse consequat esse Lorem eu proident laboris aliqua labore eiusmod Lorem Lorem eiusmod ea magna sint duis excepteur",
            "created": "2011-12-10 22:56:20",
            "location": {
                "name": "Geekfarm",
                "street": "10 consectetur",
                "state": "Iowa",
                "city": "Chloride",
                "zip": 16024
            }
        },
        {
            "id": 7,
            "name": "duis do",
            "case_id": "710c1c9c-d752-4d7c-9c0a-008d91cb3a1b",
            "description": "ex dolore dolor proident mollit officia et aliqua culpa cupidatat aliquip incididunt Lorem esse dolor ea est sint fugiat aliquip",
            "created": "1994-10-19 23:14:59",
            "location": {
                "name": "Amtap",
                "street": "2 voluptate",
                "state": "Oregon",
                "city": "Oneida",
                "zip": 14882
            }
        },
        {
            "id": 8,
            "name": "incididunt deserunt",
            "case_id": "072577c6-affd-477b-8607-a687f47fe295",
            "description": "est tempor magna aliqua do voluptate commodo adipisicing enim cillum dolor id aute veniam dolor ad eu aliqua pariatur elit",
            "created": "2006-04-15 13:38:18",
            "location": {
                "name": "Assistix",
                "street": "17 aliquip",
                "state": "Montana",
                "city": "Vandiver",
                "zip": 18949
            }
        },
        {
            "id": 9,
            "name": "aliqua laboris",
            "case_id": "80bdfdb2-ecef-49d9-94a2-cfc65bbbf655",
            "description": "et do dolore consectetur ex aliquip amet do esse cillum sint magna est pariatur nisi ad pariatur irure amet laboris",
            "created": "1999-09-28 14:50:51",
            "location": {
                "name": "Cognicode",
                "street": "19 sunt",
                "state": "Virginia",
                "city": "Barclay",
                "zip": 16117
            }
        },
        {
            "id": 10,
            "name": "sint laboris",
            "case_id": "e72cd2c6-6650-437e-b047-8b338a1cdfa5",
            "description": "irure qui exercitation in excepteur ea officia ea tempor nulla commodo reprehenderit dolore labore et esse amet ut dolor consectetur",
            "created": "2001-01-15 03:03:54",
            "location": {
                "name": "Solgan",
                "street": "1 consequat",
                "state": "Mississippi",
                "city": "Williston",
                "zip": 13468
            }
        },
        {
            "id": 11,
            "name": "dolore cupidatat",
            "case_id": "9d7dbb8c-d7bd-4a47-ab70-23154e144c13",
            "description": "labore aliqua deserunt consectetur qui minim cupidatat nisi anim ea velit occaecat duis incididunt officia eu proident id deserunt voluptate",
            "created": "2001-03-24 10:31:47",
            "location": {
                "name": "Xixan",
                "street": "10 ea",
                "state": "Hawaii",
                "city": "Ernstville",
                "zip": 13886
            }
        },
        {
            "id": 12,
            "name": "sunt cupidatat",
            "case_id": "2abe220c-b2fb-450a-9a36-acdbdf057bcb",
            "description": "cillum in ea aliqua mollit consectetur et dolor in mollit dolore eu dolor Lorem velit proident ea ipsum aliquip deserunt",
            "created": "1995-07-27 14:41:20",
            "location": {
                "name": "Kangle",
                "street": "18 eiusmod",
                "state": "Illinois",
                "city": "Bath",
                "zip": 18336
            }
        },
        {
            "id": 13,
            "name": "magna incididunt",
            "case_id": "8f454f5d-8dbd-4e94-ae7a-f05dcfe2a06d",
            "description": "id ut in exercitation ipsum enim esse aliqua mollit ullamco consequat nisi ea tempor eu sunt ad nostrud consequat duis",
            "created": "2013-01-02 02:56:16",
            "location": {
                "name": "Zaj",
                "street": "3 eu",
                "state": "Louisiana",
                "city": "Sehili",
                "zip": 14065
            }
        },
        {
            "id": 14,
            "name": "ipsum nisi",
            "case_id": "d86d0f65-7ee7-4b54-b923-af1dc6b901b0",
            "description": "excepteur proident amet ex nostrud magna consectetur cillum ipsum ut ad qui sunt fugiat labore anim sunt incididunt nostrud mollit",
            "created": "1990-09-13 14:22:30",
            "location": {
                "name": "Skybold",
                "street": "1 sit",
                "state": "Kansas",
                "city": "Delwood",
                "zip": 15192
            }
        },
        {
            "id": 15,
            "name": "enim quis",
            "case_id": "33ea1c1a-7b44-4485-994c-468da97504d0",
            "description": "ea non laboris ad cupidatat ipsum aliqua sit et incididunt Lorem duis culpa non sit incididunt pariatur nisi reprehenderit cupidatat",
            "created": "2013-02-01 22:36:01",
            "location": {
                "name": "Marqet",
                "street": "20 veniam",
                "state": "North Carolina",
                "city": "Abrams",
                "zip": 17241
            }
        },
        {
            "id": 16,
            "name": "sint quis",
            "case_id": "f1d5a285-f69c-458b-8056-1e8b4e172ce3",
            "description": "dolor culpa aliquip in irure voluptate deserunt labore aliquip aliqua ut tempor aliquip commodo aliqua esse qui aliqua consectetur aliqua",
            "created": "1988-01-30 02:38:17",
            "location": {
                "name": "Comvex",
                "street": "5 ea",
                "state": "Nebraska",
                "city": "Templeton",
                "zip": 16514
            }
        },
        {
            "id": 17,
            "name": "culpa anim",
            "case_id": "0f04606d-fc45-4412-b827-2ccf4f2731ef",
            "description": "consequat id elit veniam non et Lorem irure esse non pariatur adipisicing incididunt qui amet voluptate excepteur veniam aliqua culpa",
            "created": "1998-11-17 04:04:35",
            "location": {
                "name": "Navir",
                "street": "14 incididunt",
                "state": "Missouri",
                "city": "Clarence",
                "zip": 16874
            }
        },
        {
            "id": 18,
            "name": "nostrud mollit",
            "case_id": "658c0640-4db8-408d-bdff-bd249a7825f1",
            "description": "laboris reprehenderit voluptate ex elit amet quis eiusmod reprehenderit officia eu dolor fugiat ullamco eiusmod enim quis Lorem amet consectetur",
            "created": "2010-10-01 05:45:45",
            "location": {
                "name": "Xinware",
                "street": "2 reprehenderit",
                "state": "Florida",
                "city": "Winston",
                "zip": 12049
            }
        },
        {
            "id": 19,
            "name": "et proident",
            "case_id": "176acb04-cba1-4ee9-8bce-9ffe1eda5252",
            "description": "Lorem officia esse incididunt enim consectetur nostrud sint elit consequat ex do tempor anim cillum ex sint sit qui nostrud",
            "created": "2004-11-13 01:26:38",
            "location": {
                "name": "Myopium",
                "street": "2 deserunt",
                "state": "Delaware",
                "city": "Garnet",
                "zip": 12833
            }
        },
        {
            "id": 20,
            "name": "ipsum enim",
            "case_id": "3d245ebb-abef-4ac1-b5ff-11952a3d395a",
            "description": "laborum do ullamco do eiusmod deserunt incididunt ea non consequat sint sunt nostrud eu quis laborum dolore officia exercitation cupidatat",
            "created": "1989-01-25 03:15:55",
            "location": {
                "name": "Jamnation",
                "street": "8 eiusmod",
                "state": "Tennessee",
                "city": "Cutter",
                "zip": 14157
            }
        },
        {
            "id": 21,
            "name": "magna nulla",
            "case_id": "af5bd61f-da97-4aa0-97d0-bf71f6669f0b",
            "description": "magna ad sint qui voluptate qui anim minim nulla officia enim et adipisicing cupidatat fugiat esse consectetur culpa consectetur adipisicing",
            "created": "1999-06-18 10:01:10",
            "location": {
                "name": "Frenex",
                "street": "4 cupidatat",
                "state": "Idaho",
                "city": "Navarre",
                "zip": 11852
            }
        },
        {
            "id": 22,
            "name": "veniam pariatur",
            "case_id": "c661970f-6d04-48ce-abbf-3f6ef39e97eb",
            "description": "ipsum sunt aute labore ut ad do veniam amet quis irure duis veniam eiusmod cupidatat commodo dolor tempor pariatur excepteur",
            "created": "1992-05-24 18:12:39",
            "location": {
                "name": "Assistia",
                "street": "14 adipisicing",
                "state": "Oklahoma",
                "city": "Cedarville",
                "zip": 13102
            }
        },
        {
            "id": 23,
            "name": "elit aute",
            "case_id": "6b9d1e02-9645-482d-8718-87867c0ba4ee",
            "description": "consequat eu duis cupidatat nostrud ut dolor in occaecat irure ex exercitation laboris cupidatat dolor excepteur ex aute duis eu",
            "created": "2008-02-09 04:52:46",
            "location": {
                "name": "Joviold",
                "street": "6 velit",
                "state": "Utah",
                "city": "Wakarusa",
                "zip": 14752
            }
        },
        {
            "id": 24,
            "name": "do in",
            "case_id": "9aabb8de-2b8c-4da2-8ed7-26a18ec87b62",
            "description": "deserunt sint ad consectetur deserunt voluptate amet magna consequat pariatur cillum incididunt tempor consectetur magna enim aliqua amet dolore mollit",
            "created": "1995-08-02 20:54:46",
            "location": {
                "name": "Realmo",
                "street": "20 ullamco",
                "state": "Colorado",
                "city": "Greensburg",
                "zip": 14018
            }
        },
        {
            "id": 25,
            "name": "incididunt aliquip",
            "case_id": "227bfe01-c363-46e7-afd4-37abd3176fd6",
            "description": "Lorem et officia nostrud ipsum reprehenderit amet minim et ut dolore exercitation cillum eu minim consequat culpa incididunt Lorem sint",
            "created": "2002-01-20 04:00:28",
            "location": {
                "name": "Lingoage",
                "street": "8 est",
                "state": "Alabama",
                "city": "Baden",
                "zip": 17339
            }
        },
        {
            "id": 26,
            "name": "ipsum quis",
            "case_id": "ccef1e09-3c89-44f8-874e-e7dd0b275bae",
            "description": "veniam aliquip consequat dolore nostrud elit reprehenderit sit amet amet incididunt ullamco consectetur ut consectetur veniam eiusmod tempor incididunt ipsum",
            "created": "1993-05-03 03:31:38",
            "location": {
                "name": "Bitendrex",
                "street": "2 pariatur",
                "state": "Kentucky",
                "city": "Disautel",
                "zip": 19029
            }
        },
        {
            "id": 27,
            "name": "exercitation elit",
            "case_id": "0e6c373f-7128-47cd-baa6-85468cf8cc3f",
            "description": "minim consectetur nisi ad pariatur ullamco esse tempor culpa cillum ea sit consectetur laboris amet officia cupidatat sit reprehenderit minim",
            "created": "2003-01-23 15:28:57",
            "location": {
                "name": "Cytrak",
                "street": "9 ex",
                "state": "Minnesota",
                "city": "Waikele",
                "zip": 16418
            }
        },
        {
            "id": 28,
            "name": "irure id",
            "case_id": "b6195dc1-678c-42e3-a0f9-3b4ff4de99d1",
            "description": "culpa nostrud ad minim culpa mollit ullamco nostrud culpa mollit sunt et ex incididunt consectetur in dolor pariatur incididunt culpa",
            "created": "2001-12-28 15:40:25",
            "location": {
                "name": "Cinaster",
                "street": "6 quis",
                "state": "Arkansas",
                "city": "Ellerslie",
                "zip": 18482
            }
        },
        {
            "id": 29,
            "name": "sunt ex",
            "case_id": "21b7e7f4-b10c-412c-bc39-46b40e680e2c",
            "description": "ea laboris consectetur in anim do et et nisi nostrud consequat labore cupidatat velit veniam consequat nisi ut mollit nostrud",
            "created": "2004-11-19 19:36:13",
            "location": {
                "name": "Quonata",
                "street": "19 esse",
                "state": "Michigan",
                "city": "Rushford",
                "zip": 12258
            }
        },
        {
            "id": 30,
            "name": "qui exercitation",
            "case_id": "58657e65-ceda-4927-9a48-0e52b26b3114",
            "description": "pariatur amet ad aute ea amet eiusmod incididunt aliqua elit aliquip occaecat amet fugiat enim non laborum consequat incididunt reprehenderit",
            "created": "1988-06-17 17:44:49",
            "location": {
                "name": "Pearlesex",
                "street": "9 excepteur",
                "state": "New Mexico",
                "city": "Oley",
                "zip": 16811
            }
        },
        {
            "id": 31,
            "name": "qui ex",
            "case_id": "a538ed2e-363c-4a47-aa82-e88523b25872",
            "description": "cillum minim velit Lorem esse nisi reprehenderit est occaecat dolor ut deserunt commodo tempor tempor anim laboris sit ullamco deserunt",
            "created": "2013-03-17 22:26:44",
            "location": {
                "name": "Zomboid",
                "street": "13 aliquip",
                "state": "Vermont",
                "city": "Winfred",
                "zip": 16581
            }
        },
        {
            "id": 32,
            "name": "eu do",
            "case_id": "de267533-86a6-4079-afeb-e3d9dd02d123",
            "description": "voluptate veniam anim dolore nisi tempor commodo magna consequat dolore commodo adipisicing minim amet aliquip consectetur ex magna duis do",
            "created": "1989-06-30 12:32:57",
            "location": {
                "name": "Netplode",
                "street": "4 commodo",
                "state": "Georgia",
                "city": "Morgandale",
                "zip": 11469
            }
        },
        {
            "id": 33,
            "name": "quis officia",
            "case_id": "d363c90e-d26e-4136-b375-a919c7d1b793",
            "description": "ut voluptate nisi nulla ullamco minim consectetur nostrud tempor quis velit sint velit laborum quis duis eiusmod do nisi laborum",
            "created": "2005-06-06 06:09:11",
            "location": {
                "name": "Centuria",
                "street": "20 velit",
                "state": "New Jersey",
                "city": "Drytown",
                "zip": 15202
            }
        },
        {
            "id": 34,
            "name": "elit esse",
            "case_id": "d058427a-d816-4cc5-8dd9-bcfb8deaaf18",
            "description": "Lorem anim eu dolor minim adipisicing Lorem laboris elit veniam nulla laborum aliquip consectetur esse laboris occaecat nisi esse et",
            "created": "2006-06-22 15:01:52",
            "location": {
                "name": "Aquazure",
                "street": "11 laboris",
                "state": "Maine",
                "city": "Dyckesville",
                "zip": 11702
            }
        },
        {
            "id": 35,
            "name": "duis ullamco",
            "case_id": "392b6242-c4c8-426c-a418-681b8c802cc8",
            "description": "laborum dolore nostrud quis incididunt ut officia ad ea excepteur non culpa est eiusmod mollit culpa officia in mollit mollit",
            "created": "2005-02-07 22:18:50",
            "location": {
                "name": "Skinserve",
                "street": "9 fugiat",
                "state": "Connecticut",
                "city": "Brandywine",
                "zip": 19684
            }
        },
        {
            "id": 36,
            "name": "nisi consequat",
            "case_id": "ace107a6-edc9-472b-bed2-a06d83aadd25",
            "description": "officia fugiat sit Lorem elit esse commodo commodo culpa et voluptate esse adipisicing aute labore ipsum pariatur quis id cupidatat",
            "created": "1995-09-14 06:38:39",
            "location": {
                "name": "Talendula",
                "street": "9 non",
                "state": "Texas",
                "city": "Welda",
                "zip": 19808
            }
        },
        {
            "id": 37,
            "name": "irure est",
            "case_id": "89e32f19-2d6c-4b40-bd40-f685cbcffba8",
            "description": "ex dolore incididunt consequat occaecat ex sunt laborum dolore duis voluptate pariatur consectetur mollit eu nulla nulla qui dolor mollit",
            "created": "1998-09-18 01:27:47",
            "location": {
                "name": "Comtrail",
                "street": "5 commodo",
                "state": "South Dakota",
                "city": "Rosewood",
                "zip": 16593
            }
        },
        {
            "id": 38,
            "name": "nulla aliqua",
            "case_id": "71550ca8-16c4-4d52-922d-eb87c740433b",
            "description": "eiusmod sunt exercitation id enim ipsum in aliquip enim ad ex cillum eu cillum tempor ut ea id sit eu",
            "created": "2007-06-11 00:45:52",
            "location": {
                "name": "Vertide",
                "street": "18 aute",
                "state": "North Dakota",
                "city": "Maxville",
                "zip": 12936
            }
        },
        {
            "id": 39,
            "name": "ex id",
            "case_id": "ea8e449b-8bcc-455b-85cc-512e427cdae0",
            "description": "non nulla ipsum esse amet nisi mollit mollit exercitation laborum mollit magna proident elit consequat ea esse est culpa anim",
            "created": "2011-02-18 17:32:04",
            "location": {
                "name": "Isostream",
                "street": "20 consectetur",
                "state": "Arizona",
                "city": "Lindisfarne",
                "zip": 15960
            }
        },
        {
            "id": 40,
            "name": "adipisicing labore",
            "case_id": "0fa0ab6f-3383-46db-9e39-52a8658b44bc",
            "description": "irure labore fugiat Lorem et irure sunt consequat ex ad culpa occaecat id enim excepteur irure officia duis laboris aliqua",
            "created": "1989-05-08 14:58:48",
            "location": {
                "name": "Zaggles",
                "street": "10 esse",
                "state": "Massachusetts",
                "city": "Trail",
                "zip": 11617
            }
        },
        {
            "id": 41,
            "name": "proident et",
            "case_id": "d20e1714-1e19-47c9-ad04-7c66160c6f98",
            "description": "exercitation do culpa dolore sunt sit duis ad ipsum ea cupidatat cillum velit quis nostrud ipsum mollit occaecat excepteur do",
            "created": "1995-07-06 22:46:51",
            "location": {
                "name": "Medicroix",
                "street": "12 dolor",
                "state": "Alaska",
                "city": "Riviera",
                "zip": 16091
            }
        },
        {
            "id": 42,
            "name": "irure magna",
            "case_id": "c867ebbd-1bb0-4bce-9d74-dacece75f9c6",
            "description": "qui Lorem exercitation esse duis nisi nulla occaecat cillum dolore dolore velit velit commodo proident sint est consequat exercitation voluptate",
            "created": "1988-03-13 23:03:12",
            "location": {
                "name": "Everest",
                "street": "3 amet",
                "state": "California",
                "city": "Naomi",
                "zip": 12558
            }
        },
        {
            "id": 43,
            "name": "in anim",
            "case_id": "710f3859-8b0f-459c-b6ff-6d2a622424e5",
            "description": "eiusmod exercitation aliquip elit reprehenderit culpa culpa ex sint nulla cillum sint anim occaecat esse veniam officia labore aliquip ullamco",
            "created": "1999-10-27 15:18:43",
            "location": {
                "name": "Tetak",
                "street": "5 reprehenderit",
                "state": "Ohio",
                "city": "Winchester",
                "zip": 13395
            }
        },
        {
            "id": 44,
            "name": "exercitation Lorem",
            "case_id": "9c0be7af-03d1-4f37-8d5e-f0619683c5c5",
            "description": "quis ad ea magna ex ullamco culpa amet ad occaecat anim labore laborum anim non id enim laborum culpa irure",
            "created": "1990-03-14 20:27:26",
            "location": {
                "name": "Electonic",
                "street": "15 laborum",
                "state": "Wisconsin",
                "city": "Lindcove",
                "zip": 15783
            }
        },
        {
            "id": 45,
            "name": "non aliquip",
            "case_id": "2bdcac9a-37c0-4e80-a301-3ed409c4a725",
            "description": "consequat nisi laborum velit duis aute eu labore est irure eiusmod consectetur nostrud magna pariatur magna irure nisi magna commodo",
            "created": "2012-01-24 11:53:08",
            "location": {
                "name": "Orbiflex",
                "street": "9 duis",
                "state": "Maryland",
                "city": "Eggertsville",
                "zip": 11705
            }
        },
        {
            "id": 46,
            "name": "ullamco commodo",
            "case_id": "6df31d6b-49aa-4cd4-87b0-f50f7b9cf145",
            "description": "proident culpa ut labore nulla incididunt nulla in duis deserunt reprehenderit aute id consectetur amet quis ea ullamco Lorem nisi",
            "created": "2006-10-15 09:11:27",
            "location": {
                "name": "Decratex",
                "street": "4 sunt",
                "state": "Washington",
                "city": "Morningside",
                "zip": 11516
            }
        },
        {
            "id": 47,
            "name": "aliqua nisi",
            "case_id": "480b43c6-3ff5-4cd8-af85-3ae0e0b9d310",
            "description": "ea officia ex ipsum laborum labore id dolor aliqua incididunt exercitation proident nostrud excepteur laborum pariatur non consectetur nostrud ea",
            "created": "1990-02-11 00:14:21",
            "location": {
                "name": "Kyaguru",
                "street": "18 aute",
                "state": "Indiana",
                "city": "Lumberton",
                "zip": 13650
            }
        },
        {
            "id": 48,
            "name": "sunt ad",
            "case_id": "c426f1af-b958-4401-a823-7e59b0192478",
            "description": "ea enim Lorem eiusmod labore Lorem laboris laboris eu excepteur nostrud culpa non ullamco enim fugiat dolore non non est",
            "created": "1988-06-15 20:04:18",
            "location": {
                "name": "Sureplex",
                "street": "14 fugiat",
                "state": "New York",
                "city": "Southview",
                "zip": 11297
            }
        },
        {
            "id": 49,
            "name": "veniam eu",
            "case_id": "b64f67d8-302c-4ed0-ba83-63fc69cb992f",
            "description": "reprehenderit deserunt laboris irure ut voluptate ea ullamco nostrud nulla voluptate proident laboris tempor quis sunt deserunt ipsum quis adipisicing",
            "created": "1989-01-02 01:26:23",
            "location": {
                "name": "Musaphics",
                "street": "6 magna",
                "state": "Iowa",
                "city": "Allison",
                "zip": 10505
            }
        }
    ];


    $httpBackend.whenGET('/api/v1/matters').respond(matters);
    $httpBackend.whenGET(/^templates\//).passThrough();

});

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/dashboard', {
                templateUrl:  'templates/matters/index.html',
                controller:  'MattersCTRL'
            }).
            when('/dashboard/matters', {
                templateUrl: 'templates/matters/index.html',
                controller:  'MattersCTRL'
            }).
            when('/dashboard/matters/:mid', {
                templateUrl: 'templates/matters/index.html',
                controller:  'MattersCTRL'
            }).
            otherwise({
                redirectTo: '/dashboard'
            });
    }]);


