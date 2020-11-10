+++
title = "Angular 11 features"
subtitle = "List of new features in Angular 11"
summary ="List of new features in Angular 11"
keywords=["Angular 11 features, Angular 11"]
date="2020-11-10T00:00:05+0000"
lastmod="2020-11-10T00:01:00+0000"
type="post"
draft=false
authors = ["admin"]

[image]
  caption = "Angular 11 and typescript"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""

  # Show image only in page previews?
  preview_only = false

+++

In this post I will be listing down new features in Angular 11 version.

Angular 11 release date not yet finalized.

## Angular 11 features.

As part of Angular 11 version, Google Added so many new features to existing Angular packages. And few breaking changes from the past releases. 

### @angular/core features


1. `@angular/core/testing` deprecated `async` function,In Angular 11 they have added a migration that finds all imports and calls to the `async` function and replaces with `waitForAsync` function.[39212](https://github.com/angular/angular/pull/39212)
2. In Angular 11, ViewEncapsulation does not have Native value. They are replacing it with  ViewEncapsulation.ShadowDm. (ViewEncapsulation.Native=>ViewEncapsulation.ShadowDm)[38882](https://github.com/angular/angular/pull/38882).
3. Adding a schematic to update users to the new Angular 11 initialNavigation
options for RouterModule. This replaces the deprecated/removed true, false, legacy_disabled, and legacy_enabled options with the newer enabledBlocking and enabledNonBlocking options.[36926](https://github.com/angular/angular/pull/36926)
4. Introducing a Trusted Types policy that is only available in development mode, that allows arbitrary unsafe conversions to Trusted Types to support development features.This fixes a Trusted Types violation that occurs in `createNamedArrayType` during development mode. Instead of passing strings directly to "new
Function", use the Trusted Types compatible function constructor exposed by the Trusted Types development policy.[39209](https://github.com/angular/angular/pull/39209)
5. create internal Trusted Types module (#39207) (0875fd2)
6. depend on type definitions for Trusted Types (#39207) (c4266fb)
7. remove ViewEncapsulation.Native (#38882) (4a1c12c)

### @angular/compiler-cli features

1. TemplateTypeChecker operation to get Symbol from a template node (#38618) (c4556db)
2. Add ability to get Symbol of Templates and Elements in component template (#38618) (cf2e8b9)
3. Add ability to get Symbol of AST expression in component template (#38618) (f56ece4)
4. add ability to get symbol of reference or variable (#38618) (19598b4)
5. define interfaces to be used for TemplateTypeChecker (#38618) (9e77bd3)
6. support getting resource dependencies for a source file (#38048) (5dbf357)
7. Add keySpan to Variable Node (#38965) (239968d)
8. Parse and recover on incomplete opening HTML tags (#38681) (6ae3b68), closes #38596


### @angular/common features

1. Add ISO week-numbering year formats support to formatDate (#38828) (984ed39)
2. stricter types for DatePipe (#37447) (daf8b7f)
3. stricter types for number pipes (#37447) (7b2aac9)

### @angular/language-service features

1. Add getDefinitionAndBoundSpan (go to definition) (#39101) (3975dd9)
2. add quick info for inline templates in ivy (#39060) (904adb7)
3. [Ivy] getSemanticDiagnostics for external templates (#39065) (63624a2)
4. Add getTypeDefinitionAtPosition (go to type definition) (#39145) (a84976f)
5. Add module name to directive quick info (#39121) (4604fe9)

### @angular/forms features

1. add migration for AbstractControl.parent accesses (#39009) (aeec223), closes #32671

### @angular/router features

1. add migration to update calls to navigateByUrl and createUrlTree with invalid parameters (#38825) (7849fdd), closes #38227
2. Add relativeLinkResolution migration to update default value (#38698) (15ea811)
3. add new initialNavigation options to replace legacy (#37480) (c4becca)

### @angular/service-worker features

1. add UnrecoverableStateError
2. add the option to prefer network for navigation requests (#38565) (a206852), closes #38194


## Angular 11 Breaking changes

1. core: CollectionChangeRecord has been removed, use IterableChangeRecord instead
2. forms: Previously if FormControl, FormGroup and FormArray class instances had async validators defined at initialization time, the status change event was not emitted once async validator completed. After this change the status event is emitted into the statusChanges observable. If your code relies on the old behavior, you can filter/ignore this additional status change event.
3. router: This change corrects the argument order when calling RouteReuseStrategy#shouldReuseRoute. Previously, when evaluating child routes, they would be called with the future and current arguments would be swapped. If your RouteReuseStrategy relies specifically on only the future or current snapshot state, you may need to update the shouldReuseRoute implementation's use of "future" and "current" ActivateRouteSnapshots.
4. common: The locale data API has been marked as returning readonly arrays, rather than mutable arrays, since these arrays are shared across calls to the API. If you were mutating them (e.g. calling sort(), push(), splice(), etc) then your code will not longer compile. If you need to mutate the array, you should now take a copy (e.g. by calling slice()) and mutate the copy.
5. common: When passing a date-time formatted string to the DatePipe in a format that contains fractions of a millisecond, the milliseconds will now always be rounded down rather than to the nearest millisecond. Most applications will not be affected by this change. If this is not the desired behaviour then consider pre-processing the string to round the millisecond part before passing it to the DatePipe.
6. core: If you call TestBed.overrideProvider after TestBed initialization, provider overrides are not applied. This behavior is consistent with other override methods (such as TestBed.overrideDirective, etc) but they throw an error to indicate that, when the check was missing in the TestBed.overrideProvider function. Now calling TestBed.overrideProvider after TestBed initialization also triggers an error, thus there is a chance that some tests (where TestBed.overrideProvider is called after TestBed initialization) will start to fail and require updates to move TestBed.overrideProvider calls before TestBed initialization is completed.
7. packaging: In v10, IE 9, 10, and IE mobile support was deprecated. In v11, Angular framework removes IE 9, 10, and IE mobile support completely. Supporting outdated browsers like these increases bundle size, code complexity, and test load, and also requires time and effort that could be spent on improvements to the framework. For example, fixing issues can be more difficult, as a straightforward fix for modern browsers could break old ones that have quirks due to not receiving updates from vendors.
8. platform-webworker: @angular/platform-webworker and @angular/platform-webworker-dynamic have been removed as they were deprecated in v8
9. common: The slice pipe now returns null for the undefined input value, which is consistent with the behavior of most pipes. If you rely on undefined being the result in that case, you now need to check for it explicitly.
10. common: The typing of the keyvalue pipe has been fixed to report that for input objects that have number keys, the result will contain the string representation of the keys. This was already the case and the code has simply been updated to reflect this. Please update the consumers of the pipe output if they were relying on the incorrect types. Note that this does not affect use cases where the input values are Maps, so if you need to preserve numbers, this is an effective way.
11. common: The signatures of the number pipes now explicitly state which types are accepted. This should only cause issues in corner cases, as any other values would result in runtime exceptions.
12. common: The signature of the date pipe now explicitly states which types are accepted. This should only cause issues in corner cases, as any other values would result in runtime exceptions.
13. common: The async pipe no longer claims to return undefined for an input that was typed as undefined. Note that the code actually returned null on undefined inputs. In the unlikely case you were relying on this, please fix the typing of the consumers of the pipe output.
14. common: The case conversion pipes no longer let falsy values through. They now map both null and undefined to null and raise an exception on invalid input (0, false, NaN) just like most "common pipes". If your code required falsy values to pass through, you need to handle them explicitly.
15. router: While the new parameter types allow a variable of type NavigationExtras to be passed in, they will not allow object literals, as they may only specify known properties. They will also not accept types that do not have properties in common with the ones in the Pick. To fix this error, only specify properties from the NavigationExtras which are actually used in the respective function calls or use a type assertion on the object or variable: as NavigationExtras.
16. router: This commit changes the default value of relativeLinkResolution from 'legacy' to 'default'. If your application previously used the default by not specifying a value in the ExtraOptions and uses relative links when navigating from children of empty path routes, you will need to update your RouterModule to specifically specify 'legacy' for relativeLinkResolution. See https://angular.io/api/router/ExtraOptions#relativeLinkResolution for more details.

Reference : https://github.com/angular/angular/blob/master/CHANGELOG.md