import 'lodash';
declare let _;

export class Helper {
    extractFormValues(formControls, entityId): any {
        let formKeys = _.keys(formControls);
        let formValues = _.values(formControls).map(formControl => formControl.value);
        let entity: any = _.zipObject(formKeys, formValues);
        entity.id = entityId;

        return entity;
    }


}