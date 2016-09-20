module elasticui.directives {
    export class SourceDirective {
        constructor() {
            var directive: ng.IDirective = {};
            directive.restrict = 'A';
            directive.scope = true;

            directive.controller = controllers.SourceController;
            directive.link = function (scope, element, attrs: any, sourceCtrl) {
                scope.$watch(element.attr('eui-source'), (val) => scope.source = val);

                scope.source = scope.$eval(element.attr('eui-source'));

                sourceCtrl.init();
            }
            return directive;
        }
    }
    directives.directive('euiSource', SourceDirective);
}
