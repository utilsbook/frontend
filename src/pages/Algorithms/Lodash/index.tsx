import { useParams } from 'react-router-dom';
import CodeBlock from '../../../components/CodeBlock';
import add from './add';
import after from './after';
import at from './at';
import attempt from './attempt';
import before from './before';
import camelCase from './camelCase';
import capitalize from './capitalize';
import castArray from './castArray';
import ceil from './ceil';
import chunk from './chunk';
import clamp from './clamp';
import clone from './clone';
import cloneDeep from './cloneDeep';
import cloneDeepWith from './cloneDeepWith';
import cloneWith from './cloneWith';
import compact from './compact';
import cond from './cond';
import conforms from './conforms';
import conformsTo from './conformsTo';
import countBy from './countBy';
import create from './create';
import debounce from './debounce';
import deburr from './deburr';
import defaultTo from './defaultTo';
import defaultToAny from './defaultToAny';
import defaults from './defaults';
import defaultsDeep from './defaultsDeep';
import defer from './defer';
import delay from './delay';
import difference from './difference';
import differenceBy from './differenceBy';
import differenceWith from './differenceWith';
import divide from './divide';
import drop from './drop';
import dropRight from './dropRight';
import dropRightWhile from './dropRightWhile';
import dropWhile from './dropWhile';
import each from './each';
import eachRight from './eachRight';
import endsWith from './endsWith';
import eq from './eq';
import eqDeep from './eqDeep';
import escape from './escape';
import escapeRegExp from './escapeRegExp';
import every from './every';
import everyValue from './everyValue';
import filter from './filter';
import filterObject from './filterObject';
import findKey from './findKey';
import findLast from './findLast';
import findLastIndex from './findLastIndex';
import findLastKey from './findLastKey';
import first from './first';
import flatMap from './flatMap';
import flatMapDeep from './flatMapDeep';
import flatMapDepth from './flatMapDepth';
import flatten from './flatten';
import flattenDeep from './flattenDeep';
import flattenDepth from './flattenDepth';
import flip from './flip';
import floor from './floor';
import flow from './flow';
import flowRight from './flowRight';
import forEach from './forEach';
import forEachRight from './forEachRight';
import forOwn from './forOwn';
import forOwnRight from './forOwnRight';
import fromEntries from './fromEntries';
import functions from './functions';
import get from './get';
import groupBy from './groupBy';
import gt from './gt';
import gte from './gte';
import has from './has';
import hasIn from './hasIn';
import hasPath from './hasPath';
import hasPathIn from './hasPathIn';
import head from './head';
import inRange from './inRange';
import indexOf from './indexOf';
import initial from './initial';
import intersection from './intersection';
import intersectionBy from './intersectionBy';
import intersectionWith from './intersectionWith';
import invert from './invert';
import invertBy from './invertBy';
import invoke from './invoke';
import invokeMap from './invokeMap';
import isArguments from './isArguments';
import isArrayBuffer from './isArrayBuffer';
import isArrayLike from './isArrayLike';
import isArrayLikeObject from './isArrayLikeObject';
import isBoolean from './isBoolean';
import isBuffer from './isBuffer';
import isDate from './isDate';
import isElement from './isElement';
import isEmpty from './isEmpty';
import isEqualWith from './isEqualWith';
import isError from './isError';
import isFunction from './isFunction';
import isLength from './isLength';
import isMap from './isMap';
import isMatch from './isMatch';
import isMatchWith from './isMatchWith';
import isNative from './isNative';
import isNil from './isNil';
import isNull from './isNull';
import isNumber from './isNumber';
import isObject from './isObject';
import isObjectLike from './isObjectLike';
import isPlainObject from './isPlainObject';
import isRegExp from './isRegExp';
import isSet from './isSet';
import isString from './isString';
import isSymbol from './isSymbol';
import isTypedArray from './isTypedArray';
import isUndefined from './isUndefined';
import isWeakMap from './isWeakMap';
import isWeakSet from './isWeakSet';
import kebabCase from './kebabCase';
import keyBy from './keyBy';
import keys from './keys';
import keysIn from './keysIn';
import last from './last';
import lastIndexOf from './lastIndexOf';
import lowerCase from './lowerCase';
import lowerFirst from './lowerFirst';
import lt from './lt';
import lte from './lte';
import map from './map';
import mapKey from './mapKey';
import mapObject from './mapObject';
import mapValue from './mapValue';
import matches from './matches';
import matchesProperty from './matchesProperty';
import maxBy from './maxBy';
import mean from './mean';
import meanBy from './meanBy';
import memoize from './memoize';
import merge from './merge';
import mergeWith from './mergeWith';
import method from './method';
import methodOf from './methodOf';
import minBy from './minBy';
import multiply from './multiply';
import negate from './negate';
import nth from './nth';
import nthArg from './nthArg';
import once from './once';
import orderBy from './orderBy';
import over from './over';
import overArgs from './overArgs';
import overEvery from './overEvery';
import overSome from './overSome';
import pad from './pad';
import padEnd from './padEnd';
import padStart from './padStart';
import parseInt from './parseInt';
import partition from './partition';
import pick from './pick';
import pickBy from './pickBy';
import property from './property';
import propertyOf from './propertyOf';
import pull from './pull';
import pullAll from './pullAll';
import pullAllBy from './pullAllBy';
import pullAllWith from './pullAllWith';
import pullAt from './pullAt';
import random from './random';
import range from './range';
import rangeRight from './rangeRight';
import reduce from './reduce';
import reduceRight from './reduceRight';
import reject from './reject';
import remove from './remove';
import repeat from './repeat';
import replace from './replace';
import result from './result';
import round from './round';
import sample from './sample';
import sampleSize from './sampleSize';
import set from './set';
import setWith from './setWith';
import shuffle from './shuffle';
import size from './size';
import slice from './slice';
import snakeCase from './snakeCase';
import some from './some';
import someValue from './someValue';
import sortedIndex from './sortedIndex';
import sortedIndexBy from './sortedIndexBy';
import sortedIndexOf from './sortedIndexOf';
import sortedLastIndex from './sortedLastIndex';
import sortedLastIndexBy from './sortedLastIndexBy';
import sortedLastIndexOf from './sortedLastIndexOf';
import sortedUniq from './sortedUniq';
import sortedUniqBy from './sortedUniqBy';
import split from './split';
import startCase from './startCase';
import startsWith from './startsWith';
import subtract from './subtract';
import sum from './sum';
import sumBy from './sumBy';
import tail from './tail';
import take from './take';
import takeRight from './takeRight';
import takeRightWhile from './takeRightWhile';
import takeWhile from './takeWhile';
import throttle from './throttle';
import times from './times';
import toArray from './toArray';
import toFinite from './toFinite';
import toInteger from './toInteger';
import toLength from './toLength';
import toNumber from './toNumber';
import toPath from './toPath';
import toPlainObject from './toPlainObject';
import toSafeInteger from './toSafeInteger';
import toString from './toString';
import transform from './transform';
import trim from './trim';
import trimEnd from './trimEnd';
import trimStart from './trimStart';
import truncate from './truncate';
import unescape from './unescape';
import union from './union';
import unionBy from './unionBy';
import unionWith from './unionWith';
import uniq from './uniq';
import uniqBy from './uniqBy';
import uniqWith from './uniqWith';
import uniqueId from './uniqueId';
import unset from './unset';
import unzip from './unzip';
import unzipWith from './unzipWith';
import update from './update';
import updateWith from './updateWith';
import upperCase from './upperCase';
import upperFirst from './upperFirst';
import values from './values';
import without from './without';
import words from './words';
import xor from './xor';
import xorBy from './xorBy';
import xorWith from './xorWith';
import zip from './zip';
import zipObject from './zipObject';
import zipObjectDeep from './zipObjectDeep';
import zipWith from './zipWith';
import * as internal from './.internal/index';

const getStr = (name: string | undefined) => {
  switch (name) {
    case 'add':
      return add;
    case 'after':
      return after;
    case 'at':
      return at;
    case 'attempt':
      return attempt;
    case 'before':
      return before;
    case 'camelCase':
      return camelCase;
    case 'capitalize':
      return capitalize;
    case 'castArray':
      return castArray;
    case 'ceil':
      return ceil;
    case 'chunk':
      return chunk;
    case 'clamp':
      return clamp;
    case 'clone':
      return clone;
    case 'cloneDeep':
      return cloneDeep;
    case 'cloneDeepWith':
      return cloneDeepWith;
    case 'cloneWith':
      return cloneWith;
    case 'compact':
      return compact;
    case 'cond':
      return cond;
    case 'conforms':
      return conforms;
    case 'conformsTo':
      return conformsTo;
    case 'countBy':
      return countBy;
    case 'create':
      return create;
    case 'debounce':
      return debounce;
    case 'deburr':
      return deburr;
    case 'defaultTo':
      return defaultTo;
    case 'defaultToAny':
      return defaultToAny;
    case 'defaults':
      return defaults;
    case 'defaultsDeep':
      return defaultsDeep;
    case 'defer':
      return defer;
    case 'delay':
      return delay;
    case 'difference':
      return difference;
    case 'differenceBy':
      return differenceBy;
    case 'differenceWith':
      return differenceWith;
    case 'divide':
      return divide;
    case 'drop':
      return drop;
    case 'dropRight':
      return dropRight;
    case 'dropRightWhile':
      return dropRightWhile;
    case 'dropWhile':
      return dropWhile;
    case 'each':
      return each;
    case 'eachRight':
      return eachRight;
    case 'endsWith':
      return endsWith;
    case 'eq':
      return eq;
    case 'eqDeep':
      return eqDeep;
    case 'escape':
      return escape;
    case 'escapeRegExp':
      return escapeRegExp;
    case 'every':
      return every;
    case 'everyValue':
      return everyValue;
    case 'filter':
      return filter;
    case 'filterObject':
      return filterObject;
    case 'findKey':
      return findKey;
    case 'findLast':
      return findLast;
    case 'findLastIndex':
      return findLastIndex;
    case 'findLastKey':
      return findLastKey;
    case 'first':
      return first;
    case 'flatMap':
      return flatMap;
    case 'flatMapDeep':
      return flatMapDeep;
    case 'flatMapDepth':
      return flatMapDepth;
    case 'flatten':
      return flatten;
    case 'flattenDeep':
      return flattenDeep;
    case 'flattenDepth':
      return flattenDepth;
    case 'flip':
      return flip;
    case 'floor':
      return floor;
    case 'flow':
      return flow;
    case 'flowRight':
      return flowRight;
    case 'forEach':
      return forEach;
    case 'forEachRight':
      return forEachRight;
    case 'forOwn':
      return forOwn;
    case 'forOwnRight':
      return forOwnRight;
    case 'fromEntries':
      return fromEntries;
    case 'functions':
      return functions;
    case 'get':
      return get;
    case 'groupBy':
      return groupBy;
    case 'gt':
      return gt;
    case 'gte':
      return gte;
    case 'has':
      return has;
    case 'hasIn':
      return hasIn;
    case 'hasPath':
      return hasPath;
    case 'hasPathIn':
      return hasPathIn;
    case 'head':
      return head;
    case 'inRange':
      return inRange;
    case 'indexOf':
      return indexOf;
    case 'initial':
      return initial;
    case 'intersection':
      return intersection;
    case 'intersectionBy':
      return intersectionBy;
    case 'intersectionWith':
      return intersectionWith;
    case 'invert':
      return invert;
    case 'invertBy':
      return invertBy;
    case 'invoke':
      return invoke;
    case 'invokeMap':
      return invokeMap;
    case 'isArguments':
      return isArguments;
    case 'isArrayBuffer':
      return isArrayBuffer;
    case 'isArrayLike':
      return isArrayLike;
    case 'isArrayLikeObject':
      return isArrayLikeObject;
    case 'isBoolean':
      return isBoolean;
    case 'isBuffer':
      return isBuffer;
    case 'isDate':
      return isDate;
    case 'isElement':
      return isElement;
    case 'isEmpty':
      return isEmpty;
    case 'isEqualWith':
      return isEqualWith;
    case 'isError':
      return isError;
    case 'isFunction':
      return isFunction;
    case 'isLength':
      return isLength;
    case 'isMap':
      return isMap;
    case 'isMatch':
      return isMatch;
    case 'isMatchWith':
      return isMatchWith;
    case 'isNative':
      return isNative;
    case 'isNil':
      return isNil;
    case 'isNull':
      return isNull;
    case 'isNumber':
      return isNumber;
    case 'isObject':
      return isObject;
    case 'isObjectLike':
      return isObjectLike;
    case 'isPlainObject':
      return isPlainObject;
    case 'isRegExp':
      return isRegExp;
    case 'isSet':
      return isSet;
    case 'isString':
      return isString;
    case 'isSymbol':
      return isSymbol;
    case 'isTypedArray':
      return isTypedArray;
    case 'isUndefined':
      return isUndefined;
    case 'isWeakMap':
      return isWeakMap;
    case 'isWeakSet':
      return isWeakSet;
    case 'kebabCase':
      return kebabCase;
    case 'keyBy':
      return keyBy;
    case 'keys':
      return keys;
    case 'keysIn':
      return keysIn;
    case 'last':
      return last;
    case 'lastIndexOf':
      return lastIndexOf;
    case 'lowerCase':
      return lowerCase;
    case 'lowerFirst':
      return lowerFirst;
    case 'lt':
      return lt;
    case 'lte':
      return lte;
    case 'map':
      return map;
    case 'mapKey':
      return mapKey;
    case 'mapObject':
      return mapObject;
    case 'mapValue':
      return mapValue;
    case 'matches':
      return matches;
    case 'matchesProperty':
      return matchesProperty;
    case 'maxBy':
      return maxBy;
    case 'mean':
      return mean;
    case 'meanBy':
      return meanBy;
    case 'memoize':
      return memoize;
    case 'merge':
      return merge;
    case 'mergeWith':
      return mergeWith;
    case 'method':
      return method;
    case 'methodOf':
      return methodOf;
    case 'minBy':
      return minBy;
    case 'multiply':
      return multiply;
    case 'negate':
      return negate;
    case 'nth':
      return nth;
    case 'nthArg':
      return nthArg;
    case 'once':
      return once;
    case 'orderBy':
      return orderBy;
    case 'over':
      return over;
    case 'overArgs':
      return overArgs;
    case 'overEvery':
      return overEvery;
    case 'overSome':
      return overSome;
    case 'pad':
      return pad;
    case 'padEnd':
      return padEnd;
    case 'padStart':
      return padStart;
    case 'parseInt':
      return parseInt;
    case 'partition':
      return partition;
    case 'pick':
      return pick;
    case 'pickBy':
      return pickBy;
    case 'property':
      return property;
    case 'propertyOf':
      return propertyOf;
    case 'pull':
      return pull;
    case 'pullAll':
      return pullAll;
    case 'pullAllBy':
      return pullAllBy;
    case 'pullAllWith':
      return pullAllWith;
    case 'pullAt':
      return pullAt;
    case 'random':
      return random;
    case 'range':
      return range;
    case 'rangeRight':
      return rangeRight;
    case 'reduce':
      return reduce;
    case 'reduceRight':
      return reduceRight;
    case 'reject':
      return reject;
    case 'remove':
      return remove;
    case 'repeat':
      return repeat;
    case 'replace':
      return replace;
    case 'result':
      return result;
    case 'round':
      return round;
    case 'sample':
      return sample;
    case 'sampleSize':
      return sampleSize;
    case 'set':
      return set;
    case 'setWith':
      return setWith;
    case 'shuffle':
      return shuffle;
    case 'size':
      return size;
    case 'slice':
      return slice;
    case 'snakeCase':
      return snakeCase;
    case 'some':
      return some;
    case 'someValue':
      return someValue;
    case 'sortedIndex':
      return sortedIndex;
    case 'sortedIndexBy':
      return sortedIndexBy;
    case 'sortedIndexOf':
      return sortedIndexOf;
    case 'sortedLastIndex':
      return sortedLastIndex;
    case 'sortedLastIndexBy':
      return sortedLastIndexBy;
    case 'sortedLastIndexOf':
      return sortedLastIndexOf;
    case 'sortedUniq':
      return sortedUniq;
    case 'sortedUniqBy':
      return sortedUniqBy;
    case 'split':
      return split;
    case 'startCase':
      return startCase;
    case 'startsWith':
      return startsWith;
    case 'subtract':
      return subtract;
    case 'sum':
      return sum;
    case 'sumBy':
      return sumBy;
    case 'tail':
      return tail;
    case 'take':
      return take;
    case 'takeRight':
      return takeRight;
    case 'takeRightWhile':
      return takeRightWhile;
    case 'takeWhile':
      return takeWhile;
    case 'throttle':
      return throttle;
    case 'times':
      return times;
    case 'toArray':
      return toArray;
    case 'toFinite':
      return toFinite;
    case 'toInteger':
      return toInteger;
    case 'toLength':
      return toLength;
    case 'toNumber':
      return toNumber;
    case 'toPath':
      return toPath;
    case 'toPlainObject':
      return toPlainObject;
    case 'toSafeInteger':
      return toSafeInteger;
    case 'toString':
      return toString;
    case 'transform':
      return transform;
    case 'trim':
      return trim;
    case 'trimEnd':
      return trimEnd;
    case 'trimStart':
      return trimStart;
    case 'truncate':
      return truncate;
    case 'unescape':
      return unescape;
    case 'union':
      return union;
    case 'unionBy':
      return unionBy;
    case 'unionWith':
      return unionWith;
    case 'uniq':
      return uniq;
    case 'uniqBy':
      return uniqBy;
    case 'uniqWith':
      return uniqWith;
    case 'uniqueId':
      return uniqueId;
    case 'unset':
      return unset;
    case 'unzip':
      return unzip;
    case 'unzipWith':
      return unzipWith;
    case 'update':
      return update;
    case 'updateWith':
      return updateWith;
    case 'upperCase':
      return upperCase;
    case 'upperFirst':
      return upperFirst;
    case 'values':
      return values;
    case 'without':
      return without;
    case 'words':
      return words;
    case 'xor':
      return xor;
    case 'xorBy':
      return xorBy;
    case 'xorWith':
      return xorWith;
    case 'zip':
      return zip;
    case 'zipObject':
      return zipObject;
    case 'zipObjectDeep':
      return zipObjectDeep;
    case 'zipWith':
      return zipWith;
    case 'Hash':
      return internal.Hash;
    case 'ListCache':
      return internal.ListCache;
    case 'MapCache':
      return internal.MapCache;
    case 'SetCache':
      return internal.SetCache;
    case 'Stack':
      return internal.Stack;
    case 'addMapEntry':
      return internal.addMapEntry;
    case 'addSetEntry':
      return internal.addSetEntry;
    case 'arrayEach':
      return internal.arrayEach;
    case 'arrayEachRight':
      return internal.arrayEachRight;
    case 'arrayIncludes':
      return internal.arrayIncludes;
    case 'arrayIncludesWith':
      return internal.arrayIncludesWith;
    case 'arrayLikeKeys':
      return internal.arrayLikeKeys;
    case 'arrayReduce':
      return internal.arrayReduce;
    case 'arrayReduceRight':
      return internal.arrayReduceRight;
    case 'asciiSize':
      return internal.asciiSize;
    case 'asciiToArray':
      return internal.asciiToArray;
    case 'assignMergeValue':
      return internal.assignMergeValue;
    case 'assignValue':
      return internal.assignValue;
    case 'assocIndexOf':
      return internal.assocIndexOf;
    case 'baseAssignValue':
      return internal.baseAssignValue;
    case 'baseAt':
      return internal.baseAt;
    case 'baseClone':
      return internal.baseClone;
    case 'baseConforms':
      return internal.baseConforms;
    case 'baseConformsTo':
      return internal.baseConformsTo;
    case 'baseDifference':
      return internal.baseDifference;
    case 'baseEach':
      return internal.baseEach;
    case 'baseEachRight':
      return internal.baseEachRight;
    case 'baseFindIndex':
      return internal.baseFindIndex;
    case 'baseFindKey':
      return internal.baseFindKey;
    case 'baseFlatten':
      return internal.baseFlatten;
    case 'baseFor':
      return internal.baseFor;
    case 'baseForOwn':
      return internal.baseForOwn;
    case 'baseForOwnRight':
      return internal.baseForOwnRight;
    case 'baseForRight':
      return internal.baseForRight;
    case 'baseGet':
      return internal.baseGet;
    case 'baseInRange':
      return internal.baseInRange;
    case 'baseIndexOf':
      return internal.baseIndexOf;
    case 'baseIndexOfWith':
      return internal.baseIndexOfWith;
    case 'baseIntersection':
      return internal.baseIntersection;
    case 'baseIsEqual':
      return internal.baseIsEqual;
    case 'baseIsEqualDeep':
      return internal.baseIsEqualDeep;
    case 'baseIsMatch':
      return internal.baseIsMatch;
    case 'baseIsNaN':
      return internal.baseIsNaN;
    case 'baseMatches':
      return internal.baseMatches;
    case 'baseMatchesProperty':
      return internal.baseMatchesProperty;
    case 'baseMerge':
      return internal.baseMerge;
    case 'baseMergeDeep':
      return internal.baseMergeDeep;
    case 'baseOrderBy':
      return internal.baseOrderBy;
    case 'basePick':
      return internal.basePick;
    case 'basePickBy':
      return internal.basePickBy;
    case 'baseProperty':
      return internal.baseProperty;
    case 'basePropertyDeep':
      return internal.basePropertyDeep;
    case 'basePropertyOf':
      return internal.basePropertyOf;
    case 'basePullAll':
      return internal.basePullAll;
    case 'basePullAt':
      return internal.basePullAt;
    case 'baseRange':
      return internal.baseRange;
    case 'baseReduce':
      return internal.baseReduce;
    case 'baseSet':
      return internal.baseSet;
    case 'baseSortBy':
      return internal.baseSortBy;
    case 'baseSortedIndex':
      return internal.baseSortedIndex;
    case 'baseSortedIndexBy':
      return internal.baseSortedIndexBy;
    case 'baseSortedUniq':
      return internal.baseSortedUniq;
    case 'baseSum':
      return internal.baseSum;
    case 'baseToNumber':
      return internal.baseToNumber;
    case 'baseToString':
      return internal.baseToString;
    case 'baseUniq':
      return internal.baseUniq;
    case 'baseUnset':
      return internal.baseUnset;
    case 'baseUpdate':
      return internal.baseUpdate;
    case 'baseValues':
      return internal.baseValues;
    case 'baseWhile':
      return internal.baseWhile;
    case 'baseXor':
      return internal.baseXor;
    case 'baseZipObject':
      return internal.baseZipObject;
    case 'cacheHas':
      return internal.cacheHas;
    case 'castArrayLikeObject':
      return internal.castArrayLikeObject;
    case 'castPath':
      return internal.castPath;
    case 'castSlice':
      return internal.castSlice;
    case 'charsEndIndex':
      return internal.charsEndIndex;
    case 'charsStartIndex':
      return internal.charsStartIndex;
    case 'cloneArrayBuffer':
      return internal.cloneArrayBuffer;
    case 'cloneBuffer':
      return internal.cloneBuffer;
    case 'cloneDataView':
      return internal.cloneDataView;
    case 'cloneRegExp':
      return internal.cloneRegExp;
    case 'cloneSymbol':
      return internal.cloneSymbol;
    case 'cloneTypedArray':
      return internal.cloneTypedArray;
    case 'compareAscending':
      return internal.compareAscending;
    case 'compareMultiple':
      return internal.compareMultiple;
    case 'composeArgs':
      return internal.composeArgs;
    case 'composeArgsRight':
      return internal.composeArgsRight;
    case 'copyArray':
      return internal.copyArray;
    case 'copyObject':
      return internal.copyObject;
    case 'copySymbols':
      return internal.copySymbols;
    case 'copySymbolsIn':
      return internal.copySymbolsIn;
    case 'createAssigner':
      return internal.createAssigner;
    case 'createCaseFirst':
      return internal.createCaseFirst;
    case 'createMathOperation':
      return internal.createMathOperation;
    case 'createPadding':
      return internal.createPadding;
    case 'createRange':
      return internal.createRange;
    case 'createRound':
      return internal.createRound;
    case 'createSet':
      return internal.createSet;
    case 'customDefaultsMerge':
      return internal.customDefaultsMerge;
    case 'deburrLetter':
      return internal.deburrLetter;
    case 'equalArrays':
      return internal.equalArrays;
    case 'equalByTag':
      return internal.equalByTag;
    case 'equalObjects':
      return internal.equalObjects;
    case 'freeGlobal':
      return internal.freeGlobal;
    case 'getAllKeys':
      return internal.getAllKeys;
    case 'getAllKeysIn':
      return internal.getAllKeysIn;
    case 'getHolder':
      return internal.getHolder;
    case 'getMatchData':
      return internal.getMatchData;
    case 'getSymbols':
      return internal.getSymbols;
    case 'getSymbolsIn':
      return internal.getSymbolsIn;
    case 'getTag':
      return internal.getTag;
    case 'hasUnicode':
      return internal.hasUnicode;
    case 'initCloneObject':
      return internal.initCloneObject;
    case 'isFlattenable':
      return internal.isFlattenable;
    case 'isIndex':
      return internal.isIndex;
    case 'isIterateeCall':
      return internal.isIterateeCall;
    case 'isKey':
      return internal.isKey;
    case 'isPrototype':
      return internal.isPrototype;
    case 'isStrictComparable':
      return internal.isStrictComparable;
    case 'iteratorToArray':
      return internal.iteratorToArray;
    case 'mapToArray':
      return internal.mapToArray;
    case 'matchesStrictComparable':
      return internal.matchesStrictComparable;
    case 'memoizeCapped':
      return internal.memoizeCapped;
    case 'metaMap':
      return internal.metaMap;
    case 'nodeTypes':
      return internal.nodeTypes;
    case 'parent':
      return internal.parent;
    case 'reEscape':
      return internal.reEscape;
    case 'reEvaluate':
      return internal.reEvaluate;
    case 'reInterpolate':
      return internal.reInterpolate;
    case 'root':
      return internal.root;
    case 'setToArray':
      return internal.setToArray;
    case 'setToPairs':
      return internal.setToPairs;
    case 'setToString':
      return internal.setToString;
    case 'strictIndexOf':
      return internal.strictIndexOf;
    case 'strictLastIndexOf':
      return internal.strictLastIndexOf;
    case 'stringSize':
      return internal.stringSize;
    case 'stringToArray':
      return internal.stringToArray;
    case 'stringToPath':
      return internal.stringToPath;
    case 'toKey':
      return internal.toKey;
    case 'unicodeSize':
      return internal.unicodeSize;
    case 'unicodeToArray':
      return internal.unicodeToArray;
    case 'unicodeWords':
      return internal.unicodeWords;

    default:
      return '';
  }
};

const Lodash = () => {
  const { slug } = useParams();

  const str = getStr(slug);
  console.log('STR', slug);

  return (
    <>
      <CodeBlock>{str}</CodeBlock>
    </>
  );
};

export default Lodash;
