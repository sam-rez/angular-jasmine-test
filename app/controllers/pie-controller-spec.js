describe("PieController", function(){

    var $rootscope, $scope, $controller;

    beforeEach(function(){
        module('pie');
        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("PieController", {$scope: $scope});
        });
    });

    describe("Action Handlers", function(){
        describe("eatSlice", function(){
            it("should decrement number of slices", function(){
                expect($scope.slices).toEqual(8);
                $scope.eatSlice();
                expect($scope.slices).toEqual(7);
            });

            it("should do nothing when slices 0", function(){
                $scope.slices = 0;
                $scope.eatSlice();
                expect($scope.slices).toEqual(0);
            });
        });
    });


    describe("Initialization",function(){
        it("hsould instantriate slices to 8", function(){
            expect($scope.slices).toEqual(8);
        });
    });
});
