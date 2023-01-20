//###START### File - SOBRE.js //###->###
/**
*#############################################################################*
*##                                                                         ##*
*##     ~   {                    SOBRE.JS                         }   ~     ##*
*##                                                                         ##*
*#############################################################################*
**/
/**
 * Version : 3
 * Revision : 13/01/2023
 * Auteur : Mathaus Leth
 */
//#!Debut!#
//
//--!--
const SOBRE = {};
//--!--
//  ##  LES CONSTANTES  ##  //
const T = true;
const F = false;
const N = null;
const U = undefined;
const V = '';
//--!--
//  ##  LA DEFINITION  ##   //
(function () {
//--!--
// -> Les Namespaces (MAJUSCULES et ANGLAIS):
//#region
SOBRE.CRYPTO = {};
SOBRE.ENUM = {};
SOBRE.FILE = {};
SOBRE.MEMORY = {};
SOBRE.TCP = {};
//SOBRE.FILE (dépendences)
//todo: remplacer par les vrais modules
SOBRE.CLASS = {};
SOBRE.CLASS.DIMENSION2D = class {}; // Fake class
//#endregion
//--!--
// -> Les Fonctions (UpperCamelCase et FRANCAIS):
//#region
SOBRE.ArrondirDecimales = function (number, decimals = 2) {
    var multiplicateur = (decimals === 2) ? 100 : 0;
    if (multiplicateur === 0) {
        multiplicateur = 10;
        for (var i = 1; i < decimals; i++) { multiplicateur *= 10; }
    }
    return (Math.round(number * multiplicateur) / multiplicateur);
};
//#endregion
//--!--
// -> Les Fonctions 'booléennes' (lowerCamelCase et ANGLAIS):
//#region
SOBRE.exists = function (something) {
    return (something !== N && something !== U && something !== 'null' && something !== 'undefined');
};
SOBRE.isFunction = function (something) {
    return (typeof something === 'function');
};
SOBRE.isInteger = function (something, positive = F) {
    const valeur = Number.parseInt(something);
    return ((positive === F) ? Number.isSafeInteger(valeur) : Number.isSafeInteger(valeur) && valeur >= 0);
};
//#endregion
//--!--
// -> Les Fonctions 'this' (UpperCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Objets (MAJUSCULES et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables (minuscules et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables 'require' (minuscules et ANGLAIS):
//#region
//#endregion
//--!--
}());
//--!--
//#!Fin!#
//###<-### File - SOBRE.js //###END###//###START### File - CRYPTO.js //###->###
/**
*#############################################################################*
*##                                                                         ##*
*##     ~   {                    CRYPTO.JS                        }   ~     ##*
*##                                                                         ##*
*#############################################################################*
**/
/**
 * Version : 3
 * Revision : 12/01/2023
 * Auteur : Mathaus Leth
 */
//#!Debut!#
//
//--!--
//  ##  LES CONSTANTES  ##  //
//--!--
//  ##  LA DEFINITION  ##   //
(function () {
//--!--
// -> Les Namespaces (MAJUSCULES et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions (UpperCamelCase et FRANCAIS):
//#region
SOBRE.CRYPTO.CreerEmpreinte = function (string, safe = F, algorithm = SOBRE.ENUM.CRYPTO.SHA256) {
        if (typeof string === 'string') {
                let cle = (safe) ? SOBRE.CRYPTO.guard : N;
                cle = (SOBRE.exists(cle)) ? cle : N;
                return (SOBRE.CRYPTO.Chiffrer(string, algorithm, cle));
        }
        return ('bad print');
};
SOBRE.CRYPTO.Chiffrer = function (string, algorithm = SOBRE.ENUM.CRYPTO.SHA256, passphrase = N) {
        const algorithme = SOBRE.ENUM.CRYPTO.GET(algorithm);
        if (SOBRE.exists(this.driver)) {
                if (SOBRE.exists(passphrase)) {
                        let cle = passphrase + SOBRE.CRYPTO.salt;
                        cle = (SOBRE.exists(cle)) ? cle : V;
                        return (this.driver.createHmac(algorithme, cle)
                                .update(string)
                                .digest(SOBRE.ENUM.CRYPTO.HEX));
                } else {
                        return (this.driver.createHash(algorithme)
                                .update(string)
                                .digest(SOBRE.ENUM.CRYPTO.HEX));
                }
        }
        return (N);
};
//#endregion
//--!--
// -> Les Fonctions 'booléennes' (lowerCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions 'this' (UpperCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Objets (MAJUSCULES et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables (minuscules et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables 'require' (minuscules et ANGLAIS):
//#region
SOBRE.CRYPTO.driver = N;
SOBRE.CRYPTO.salt = V;
SOBRE.CRYPTO.guard = V;
//#endregion
//--!--
}());
//--!--
//#!Fin!#
//###<-### File - CRYPTO.js //###END###//###START### File - ENUM.js //###->###
/**
*#############################################################################*
*##                                                                         ##*
*##     ~   {                    ENUM.JS                          }   ~     ##*
*##                                                                         ##*
*#############################################################################*
**/
/**
 * Version : 3
 * Revision : 11/01/2023
 * Auteur : Mathaus Leth
 */
//#!Debut!#
//
//--!--
//  ##  LES CONSTANTES  ##  //
//--!--
//  ##  LA DEFINITION  ##   //
(function () {
//--!--
// -> Les Namespaces (MAJUSCULES et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions (UpperCamelCase et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions 'booléennes' (lowerCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions 'this' (UpperCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Objets (MAJUSCULES et FRANCAIS):
//#region
SOBRE.ENUM.CRYPTO = {
    SHA256: 'sha256',
    SHA512: 'sha512',
    HEX: 'hex',
    GET: function (value = this.HEX) {
        switch (value) {
            case (this.SHA256):
                return ('sha256');
            case (this.SHA512):
                return ('sha512');
            case (this.HEX):
                return ('hex');
            default:
                return ('hex');
        }
    }
};
SOBRE.ENUM.ELEMENT = {
    BODY: 'body',
    DIV: 'div',
    FORM: 'form',
    IMG: 'img',
    INPUT: 'input',
    LI: 'li',
    SPAN: 'span',
    UL: 'ul',
    GET: function (value = this.DIV) {
        switch (value) {
            case (this.BODY):
                return ('body');
            case (this.DIV):
                return ('div');
            case (this.FORM):
                return ('form');
            case (this.IMG):
                return ('img');
            case (this.INPUT):
                return ('input');
            case (this.LI):
                return ('li');
            case (this.SPAN):
                return ('span');
            case (this.UL):
                return ('ul');
            default:
                return ('div');
        }
    }
};
SOBRE.ENUM.DISPLAY = {
    DEFAUT: 'block',
    FLEX: 'flex',
    INLINE: 'inline-block',
    NONE: 'none',
    GET: function (value = this.DEFAUT) {
        switch (value) {
            case (this.DEFAUT):
                return ('block');
            case (this.INLINE):
                return ('inline-block');
            case (this.FLEX):
                return ('flex');
            case (this.NONE):
                return ('none');
            default:
                return ('block');
        }
    }
};
SOBRE.ENUM.UNIT = {
    EM: 'em',
    PX: 'px',
    PERCENT: '%',
    DECLARE: function (number, unit = this.PX) {
        number = (Number.isSafeInteger(number)) ? number : 0;
        switch (unit) {
            case (this.PX):
                return (`${number}px`);
            case (this.PERCENT):
                return (`${number}%`);
            case (this.EM):
                return (`${number}em`);
            default:
                return (`${number}px`);
        }
    }
};
SOBRE.ENUM.COLOR = {
    SOBRE: {
        WHITE: 'rgb(255,255,240)',
        RED: 'rgb(255,245,230)',
        GREEN: 'rgb(245,255,230)',
        BLUE: 'rgb(245,245,245)',
        CYAN: 'rgb(245,255,245)',
        MAGENTA: 'rgb(255,245,245)',
        YELLOW: 'rgb(255,255,230)',
        GREY: 'rgb(245,245,230)',
        MPINK: 'rgb(255,177,185)',
        MBLUE: 'rgb(17,190,255)'
    },
    GREY: 'grey',
    BLACK: 'black',
    GET: function (color = this.BLACK) {
        switch (color) {
            case (this.GREY):
                return ('grey');
            case (this.BLACK):
                return ('black');
            default:
                return ('black');
        }
    },
    GETALPHA: function (color = this.SOBRE.WHITE) {
        switch (color) {
            case (this.SOBRE.WHITE):
                return ('rgb(255,255,240)');
            case (this.SOBRE.RED):
                return ('rgb(255,245,230)');
            case (this.SOBRE.GREEN):
                return ('rgb(245,255,230)');
            case (this.SOBRE.BLUE):
                return ('rgb(245,245,245)');
            case (this.SOBRE.CYAN):
                return ('rgb(245,255,245)');
            case (this.SOBRE.MAGENTA):
                return ('rgb(255,245,245)');
            case (this.SOBRE.YELLOW):
                return ('rgb(255,255,230)');
            case (this.SOBRE.GREY):
                return ('rgb(245,245,230)');
            case (this.SOBRE.MPINK):
                return ('rgb(255,177,185)');
            case (this.SOBRE.MBLUE):
                return ('rgb(17,190,255)');
            default:
                return ('rgb(255,255,240)');
        }
    }
};
SOBRE.ENUM.FLOAT = {
    LEFT: 'left',
    NONE: 'none',
    RIGHT: 'right',
    GET: function (value = this.LEFT) {
        switch (value) {
            case (this.LEFT):
                return ('left');
            case (this.NONE):
                return ('none');
            case (this.RIGHT):
                return ('right');
            default:
                return ('none');
        }
    }
};
SOBRE.ENUM.SIDE = {
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left',
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
    ALL: 'all',
    BORDERSIDE: function (side = this.ALL) {
        switch (side) {
            case (this.TOP):
               return ('border-top');
            case (this.RIGHT):
                return ('border-right');
            case (this.BOTTOM):
                return ('border-bottom');
            case (this.LEFT):
                return ('border-left');
            case (this.ALL):
                return ('border');
            default:
                return ('border');
        }
    },
    GET: function (value = this.ALL) {
        switch (value) {
            case (this.TOP):
                return ('top');
            case (this.RIGHT):
                return ('right');
            case (this.BOTTOM):
                return ('bottom');
            case (this.LEFT):
                return ('left');
            case (this.HORIZONTAL):
                return ('horizontal');
            case (this.VERTICAL):
                return ('vertical');
            case (this.ALL):
                return ('all');
            default:
                return ('all');
        }
    },
    MARGINSIDE: function (side = this.ALL) {
        switch (side) {
            case (this.TOP):
               return ('margin-top');
            case (this.RIGHT):
                return ('margin-right');
            case (this.BOTTOM):
                return ('margin-bottom');
            case (this.LEFT):
                return ('margin-left');
            case (this.ALL):
                return ('margin');
            default:
                return ('margin');
        }
    },
    PADDINGSIDE: function (side = this.ALL) {
        switch (side) {
            case (this.TOP):
               return ('padding-top');
            case (this.RIGHT):
                return ('padding-right');
            case (this.BOTTOM):
                return ('padding-bottom');
             case (this.LEFT):
                return ('padding-left');
            case (this.ALL):
                return ('padding');
            default:
                return ('padding');
        }
    }
};
SOBRE.ENUM.SIDELESS = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
    TOPLESS: 'topless',
    RIGHTLESS: 'rightless',
    BOTTOMLESS: 'bottomless',
    LEFTLESS: 'leftless',
    GET: function (value = this.HORIZONTAL) {
        switch (value) {
            case (this.HORIZONTAL):
                return ('horizontal');
            case (this.VERTICAL):
                return ('vertical');
            case (this.TOPLESS):
                return ('topless');
            case (this.RIGHTLESS):
                return ('rightless');
            case (this.BOTTOMLESS):
                return ('bottomless');
            case (this.LEFTLESS):
                return ('leftless');
            default:
                return ('horizontal');
        }
    }
};
SOBRE.ENUM.BORDERSTYLE = {
    DOTTED: 'dotted',
    DASHED: 'dashed',
    SOLID: 'solid',
    DOUBLE: 'double',
    GROOVE: 'groove',
    RIDGE: 'ridge',
    INSET: 'inset',
    OUTSET: 'outset',
    NONE: 'none',
    HIDDEN: 'hidden',
    GET: function (value = this.NONE) {
        switch (value) {
            case (this.DOTTED):
                return ('dotted');
            case (this.DASHED):
                return ('dashed');
            case (this.SOLID):
                return ('solid');
            case (this.DOUBLE):
                return ('double');
            case (this.GROOVE):
                return ('groove');
            case (this.RIDGE):
                return ('ridge');
            case (this.INSET):
                return ('inset');
            case (this.OUTSET):
                return ('outset');
            case (this.NONE):
                return ('none');
            case (this.HIDDEN):
                return ('hidden');
            default:
                return ('none');
        }
    }
};
SOBRE.ENUM.VALUE = {
    AUTO: 'auto',
    INHERIT: 'inherit',
    IMPORTANT: ' !important',
    GET: function (value = this.IMPORTANT) {
        switch (value) {
            case (this.AUTO):
                return ('auto');
            case (this.INHERIT):
                return ('inherit');
            case (this.IMPORTANT):
                return (' !important');
            default:
                return (' !important');
        }
    }
};
//#endregion
//--!--
// -> Les Variables (minuscules et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables 'require' (minuscules et ANGLAIS):
//#region
//#endregion
//--!--
}());
//--!--
//#!Fin!#
//###<-### File - ENUM.js //#//###START### File - FILE.js //###->###
/**
*#############################################################################*
*##                                                                         ##*
*##     ~   {                    FILE.JS                          }   ~     ##*
*##                                                                         ##*
*#############################################################################*
**/
/**
 * Version : 3
 * Revision : 07/01/2022
 * Auteur : Mathaus Leth
 */
//#!Debut!#
//
//--!--
//  ##  LES CONSTANTES  ##  //
//--!--
//  ##  LA DEFINITION  ##   //
(function () {
//--!--
// -> Les Namespaces (MAJUSCULES et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions (UpperCamelCase et FRANCAIS):
//#region
SOBRE.FILE.LireFichier = function (source, dimensions = N) {
    if (SOBRE.exists(SOBRE.FILE.driver)) {
        try {
            const fichierBinaire = SOBRE.FILE.driver.readFileSync(source);
            if (SOBRE.exists(fichierBinaire)) SOBRE.FILE.files[source] = new SOBRE.FILE.FICHIER(fichierBinaire, dimensions);
        } catch (error) { console.error(error); }
    }
};
SOBRE.FILE.LireFichierAsync = function (source, dimensions = N) {
    if (SOBRE.exists(SOBRE.FILE.driver)) {
        SOBRE.FILE.driver.readFile(source, (error, fileBuffer) => {
            if (error) {
                console.error(error);
                return;
            }
            if (SOBRE.exists(fileBuffer)) SOBRE.FILE.files[source] = new SOBRE.FILE.FICHIER(fileBuffer, dimensions);
        });
    }
};
//#endregion
//--!--
// -> Les Fonctions 'booléennes' (lowerCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions 'this' (UpperCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Objets (MAJUSCULES et FRANCAIS):
//#region
SOBRE.FILE.FICHIER = class {
    constructor (fileBuffer, dimensions = N) {
        this.binaire = fileBuffer;
        if (dimensions instanceof SOBRE.CLASS.DIMENSION2D) { this.dimensions = dimensions; }
    };
    static isFile (object) { return (object instanceof SOBRE.FILE.FICHIER); };
};
//#endregion
//--!--
// -> Les Variables (minuscules et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables 'require' (minuscules et ANGLAIS):
//#region
SOBRE.FILE.driver = N;
SOBRE.FILE.files = {};
//#endregion
//--!--
}());
//--!--
//#!Fin!#
//###<-### File - FILE.js //###END###//###START### File - MEMORY.js //###->###
/**
*#############################################################################*
*##                                                                         ##*
*##     ~   {                    MEMORY.JS                        }   ~     ##*
*##                                                                         ##*
*#############################################################################*
**/
/**
 * Version : 3
 * Revision : 10/01/2023
 * Auteur : Mathaus Leth
 */
//#!Debut!#
//
//--!--
//  ##  LES CONSTANTES  ##  //
//--!--
//  ##  LA DEFINITION  ##   //
(function () {
//--!--
// -> Les Namespaces (MAJUSCULES et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Fonctions (UpperCamelCase et FRANCAIS):
//#region
SOBRE.MEMORY.Convertir = function (bytes, twice = F) {
    if (twice) return (SOBRE.ArrondirDecimales(bytes / 1024 / 1024));
    return (SOBRE.ArrondirDecimales(bytes / 1024));
};
SOBRE.MEMORY.RecupererUtilisationMemoire = function () {
    if (SOBRE.exists(process) && SOBRE.isFunction(process.memoryUsage)) {
        const utilisationMemoire = 100 * SOBRE.MEMORY.Convertir(process.memoryUsage().rss, T);
        return (SOBRE.ArrondirDecimales(utilisationMemoire / SOBRE.MEMORY.max, 1));
    }
    console.warning('Nodejs process object is undefined.');
    return (-1);
};
SOBRE.MEMORY.InterrompreRequete = function (response) {
    if (SOBRE.isFunction(SOBRE.MEMORY.outOfMemory)) { SOBRE.MEMORY.outOfMemory(response); }
};
//#endregion
//--!--
// -> Les Fonctions 'booléennes' (lowerCamelCase et ANGLAIS):
//#region
SOBRE.MEMORY.isSafe = function () {
    const utilisationMemoire = SOBRE.MEMORY.RecupererUtilisationMemoire();
    if (SOBRE.isInteger(SOBRE.MEMORY.limit, T) && utilisationMemoire > -1) { return (SOBRE.MEMORY.limit > utilisationMemoire); }
    return (F);
};
//#endregion
//--!--
// -> Les Fonctions 'this' (UpperCamelCase et ANGLAIS):
//#region
//#endregion
//--!--
// -> Les Objets (MAJUSCULES et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables (minuscules et FRANCAIS):
//#region
//#endregion
//--!--
// -> Les Variables 'require' (minuscules et ANGLAIS):
//#region
SOBRE.MEMORY.max = 1000;
SOBRE.MEMORY.limit = 99.9;
SOBRE.MEMORY.outOfMemory = N;
//#endregion
//--!--
}());
//--!--
//#!Fin!#
//###<-### File - MEMORY.js //###END###//###START### File - _export.js //###->###
/**
 * Version : 2
 * Revision : 26/01/2021
 * Auteur : Mathaus Leth
 */
//#!Debut!#
//
//--!--
module.exports = {
    SOBRE: SOBRE
};
//--!--
//#!Fin!#
//###<-### File - _export.js //###END###
//##############################################