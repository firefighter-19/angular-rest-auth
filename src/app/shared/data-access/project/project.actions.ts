import { createAction, props } from "@ngrx/store";

export enum ProjectActions {
  LOAD_PROJECTS = "[Projects Api] Try load projects",
  PROJECTS_LOAD_SUCCESS = "[Projects Api] Projects successfully loaded",
  PROJECTS_LOAD_ERROR = "[Projects Api] Projects loading error occur",
}

export const projectsLoadingAction = createAction(
  ProjectActions.LOAD_PROJECTS,
  props<{ pagination: any }>()
);

export const projectsSuccessAction = createAction(
  ProjectActions.PROJECTS_LOAD_SUCCESS,
  props<any>()
);

export const projectsErrorAction = createAction(
  ProjectActions.PROJECTS_LOAD_ERROR,
  props<{ errorMessage: string }>()
);
