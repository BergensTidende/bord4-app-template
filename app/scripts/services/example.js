define(['./module', 'moment', 'lodash'], function(services, moment, _) {
    'use strict';
    services.factory('exampleService', ['$resource', 'APISERVER',



        function($resource, APISERVER) {

            var imagebaseurl = 'http://multimedia.bt.no/kommunebygger/storkommunebilde/thumbs/';
            var linkbaseurl = 'http://www.bt.no/spesial/kommunebygger/#!/storkommune/';

            return $resource(APISERVER + '/kommunebygger/api/big_municipalities/:limit/:offset', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        limit: 10,
                        offset: 0
                    },
                    transformResponse: function(data, headers) {
                        data = angular.fromJson(data);
                        data = _.map(data, function(d) {
                            var imgurl = imagebaseurl + d.cartodb_id + '.jpg';
                            //var imgurl = 'http://bt.mnocdn.no/incoming/article3184048.ece/ALTERNATES/w680c169/Mongstad-terminalen.jpg?updated=260820141216';
                            //d.thumburl = "http://image.snd.no/resize/?src="+encodeURI(imgurl)+"&w=400";
                            d.thumburl = imgurl;
                            d.linkurl = linkbaseurl + d.cartodb_id;
                            d.datetime = moment(d.created_at);
                            return d;
                        })
                        console.log(data)
                        return data;

                    }
                }
            });
        }
    ]);
});