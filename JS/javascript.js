var part1 = '<div id="part1" class="container noselect">' + '<div id="dipHead" class="noselect">' + '<h1>Dipper</h1>' + '</div>' + '<div id="wellcomeMsg" class="noselect">' + '<p>Hi, my name is Mahdi.</br>Wellcome to my webpage!</br>I see this webpage as my resume</br>contact me if you are intrested :)</p>' + '</div>' + '</div>'
var part2 = '<div id="part2" class="container noselect">' + '<div id="amHead">' + '<h2>About me</h2>' + '</div>' + '<div id="amPara" class="noselect">' + '<p>My full name is Mahdi Kafash Kohan.</br>I am fluent in HTML and CSS, </br> also I am familiar with JS, JQuery, SASS, Bootstrap, Python and C++. </br> <strong> I learned self - Tutorial </strong>. </br>Made using HTML,CSS,JS and love</p> ' + ' </div>' + '</div>'
var part3 = '<div id="part3">' + '<a id="perePJBtn" target="_blank"><div><img src="./SVG/prebtn.svg"></div></a>' + '<div id="slider" class="container , noselect">' + '<div id="image"><div ><img id="X" src="./images/1.png"></div></div>' + '<div id="commentHead"><h2>' + 'Multiplication table' + '</h2></div>' + '<div id="commentPara"><p>' + 'in this project you have to choose the right answer to the multiplication question. </br> please open with desktop browser.' + '</p></div>' + '<a id="commentGithub" href="' + 'https://github.com/DipperTheViper/Multiplication-Table' + '" target=”_blank”><div><img src="./SVG/github.svg"><span id="git">GitHub</span></div></a>' + '<a id="pjLink" href="' + './websites/1/index.html' + '" target=”_blank”><div><span id="pre">Preview</span><img id="pointer" src="./SVG/poinetr.svg"></div></a>' + '</div>' + '<a id="nextPJBtn" target="_blank"><div><img src="./SVG/nextbtn.svg"></div></a>' + '</div>'
var partholder;
homePage();

function deactive(id) {
    document.getElementById("home").style.setProperty("border-bottom", "none");
    document.getElementById("aboutMe").style.setProperty("border-bottom", "none");
    document.getElementById("myPJ").style.setProperty("border-bottom", "none");
    document.getElementById(id).style.setProperty("border-bottom", "solid white 5px");
};

function putt(_input) {
    document.getElementById("commentHead").innerHTML = _input.title;
    document.getElementById("commentPara").innerHTML = _input.body;
    document.getElementById("commentGithub").href = _input.linkgit;
    document.getElementById("pjLink").href = _input.preview;
    document.getElementById("X").src = _input.img;
};

function puttpart(parts) {
    document.getElementById("part").innerHTML = parts;
};

function scrolpos(val) {
    if (val == 1) {
        document.getElementById("scrolLine").style.setProperty("bottom", "60px");
        document.getElementById("scrolParaVal").innerText = 'About me';
    } else if (val == 2) {
        document.getElementById("scrolLine").style.setProperty("bottom", "50px");
        document.getElementById("scrolParaVal").innerText = 'My Project';
    } else if (val == 3) {
        document.getElementById("scrolLine").style.setProperty("bottom", "40px");
        document.getElementById("scrolParaVal").innerText = 'Home';
    }
}


function wheel1() {
    setTimeout(function() {
        if (partholder == 1) {
            aboutMe();
            partholder = 2;
        } else if (partholder == 2) {
            myProjects();
            partholder = 3;
        } else if (partholder == 3) {
            homePage();
            partholder = 1;
        }
    }, 200)
};

function homePage() {
    partholder = 1;
    puttpart(part1);
    deactive("home");
    scrolpos(1);
    setTimeout(function() {
        document.getElementById("part1").classList.add('active')
    }, 200);
}

function aboutMe() {
    partholder = 2;
    puttpart(part2);
    deactive("aboutMe");
    scrolpos(2);
    setTimeout(function() {
        document.getElementById("part2").classList.add('active')
    }, 100);

}

function myProjects() {
    partholder = 3;
    var slidenum = 0;
    let a = [{
            title: '<h2>Multiplication table</h2>',
            body: '<p>in this project you have to choose the right answer to the multiplication question. </br> please open with desktop browser.</p>',
            linkgit: 'https://github.com/DipperTheViper/Multiplication-Table',
            preview: './websites/1/index.html',
            img: './images/1.png'
        },
        {
            title: '<h2>Cut the fruit</h2>',
            body: '<p>in this project you have to move the mouse under the fruit to cut them. </br> please open with desktop browser.</p>',
            linkgit: 'https://github.com/DipperTheViper/Cut-The-Fruit',
            preview: './websites/2/index.html',
            img: './images/2.png'
        },
        {
            title: '<h2>lock screen</h2>',
            body: '<p>in this project you can see a locked screen that afer clicking the screen will change </br> its responsive! </p>',
            linkgit: 'https://github.com/DipperTheViper/lockscreen',
            preview: './websites/3/index.html',
            img: './images/3.png'
        }
    ];
    puttpart(part3);
    deactive("myPJ");
    setTimeout(function() {
        document.getElementById("part3").classList.add('active')
    }, 200);
    document.getElementById("nextPJBtn").onclick = function() {
        if (slidenum != 2) {
            slidenum++;
            putt(a[slidenum]);
        } else if (slidenum == 2) {
            slidenum = 0;
            putt(a[slidenum]);
        }
    };
    document.getElementById("perePJBtn").onclick = function() {
        if (slidenum != 0) {
            slidenum--;
            putt(a[slidenum]);
        } else if (slidenum == 0) {
            slidenum = 2;
            putt(a[slidenum]);
        }
    };
    scrolpos(3);
}