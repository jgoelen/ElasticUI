module elasticui.controllers {

    export interface ISourceScope extends IIndexScope {
        source: any;
    }

    export class SourceController{
        private scope: ISourceScope;

        static $inject = ['$scope'];
        constructor($scope: ISourceScope){
            this.scope = $scope;
        }

        public init() {
            this.scope.$watch('indexVM.source', () => this.readSource());
            this.scope.$watch('source', () => this.readSource());
            this.updateSource();
        }

        private updateSource() {
            if (this.scope.source !== null) {
                this.scope.indexVM.source = this.scope.source;
            }
        }

        public readSource() {
            this.scope.source = this.scope.indexVM.source;
        }
    }
}