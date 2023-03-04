import { createFeatureSelector, createSelector } from "@ngrx/store";
import { projectFutureKey, ProjectState } from "./products.reducer";

const projectsState = createFeatureSelector<ProjectState>(projectFutureKey);

export const getProjectsState = createSelector(projectsState, (state) => state);
