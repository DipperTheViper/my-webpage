var part1 = '<div id="part1" class="container , noselect">' + '<div id="dipHead" class="noselect active">' + '<h1>Dipper</h1>' + '</div>' + '<div id="wellcomeMsg" class="noselect">' + '<p>Hi, my name is Mahdi.</br>Wellcome to my webpage!</br>I see this webpage as my resume</br>contact me if you are intrested :)</p>' + '</div>' + '</div>'
var part2 = '<div id="part2" class="container , noselect">' + '<div id="amHead">' + '<h2>About me</h2>' + '</div>' + '<div id="amPara" class="noselect">' + '<p>My full name is Mahdi Kafash Kohan.</br>I am fluent in HTML and CSS, </br> also I am fimiliar with JS, JQuery, SASS, Bootstrap, Python and C++. </br> <strong> I learned self - Tutorial </strong>. </p> ' + ' </div>' + '</div>'
var part3 = '<div id="part3">' + '<a id="perePJBtn" target="_blank"><div><img src="./SVG/prebtn.svg"></div></a>' + '<div id="slider" class="container , noselect">' + '<div id="image"><div ><img id="X" src="./images/1.png"></div></div>' + '<div id="commentHead"><h2>' + 'Multiplication table' + '</h2></div>' + '<div id="commentPara"><p>' + 'in this project you have to choose the right answer to the multiplication question. </br> please open with desktop browser.' + '</p></div>' + '<a id="commentGithub" href="' + 'https://github.com/DipperTheViper/Multiplication-Table' + '" target=”_blank”><div><img src="./SVG/github.svg"><span id="git">GitHub</span></div></a>' + '<a id="pjLink" href="' + './websites/1/index.html' + '" target=”_blank”><div><span id="pre">Preview</span><img id="pointer" src="./SVG/poinetr.svg"></div></a>' + '</div>' + '<a id="nextPJBtn" target="_blank"><div><img src="./SVG/nextbtn.svg"></div></a>' + '</div>'

puttpart(part1);
deactive("home");

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
        document.getElementById("scrolLine").style.setProperty("bottom", "40px");
    } else if (val == 2) {
        document.getElementById("scrolLine").style.setProperty("bottom", "50px");
    } else if (val == 3) {
        document.getElementById("scrolLine").style.setProperty("bottom", "60px");
    }
}


document.getElementById("home").onclick = function() {
    puttpart(part1);
    deactive("home");
    scrolpos(1);
    return false;
};

document.getElementById("aboutMe").onclick = function() {
    document.querySelector(".active").classList.remove("active");
    puttpart(part2);
    document.querySelector("#amHead").classList.add("active");
    deactive("aboutMe");
    scrolpos(2);
    return false;
};

document.getElementById("myPJ").onclick = function() {
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
        }
    ];
    puttpart(part3);
    deactive("myPJ");
    document.getElementById("nextPJBtn").onclick = function() {
        if (slidenum == 0) {
            slidenum++;
            putt(a[slidenum]);
        }
    };
    document.getElementById("perePJBtn").onclick = function() {
        if (slidenum == 1) {
            slidenum--;
            putt(a[slidenum]);
        }
    };
    scrolpos(3);
    return false;
};